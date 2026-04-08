const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyFFb53qyNdBBPDifTrGT3nHhdeWjEXzrpkxXCcDhPL9hwLAtnwqnLOKsHKKLduwSQB/exec';

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get('uid');
    
    // 1. Language Handling
    const lang = urlParams.get('lang');
    if (lang && (lang === 'en' || lang === 'el')) {
        i18n.applyLanguage(lang);
    }

    if (!uid) {
        showState('mg-not-found-state');
        return;
    }

    // 2. Fetch Appointment Details
    try {
        const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getAppointment&uid=${uid}`);
        const data = await response.json();

        if (data.success && data.event) {
            populateDetails(data.event, uid);
            showState('mg-details-state');
        } else {
            showState('mg-not-found-state');
        }
    } catch (error) {
        console.error('Error fetching appointment:', error);
        showState('mg-not-found-state');
    }

    // 3. Event Listeners
    document.getElementById('confirm-cancel-trigger').onclick = () => showState('mg-cancel-confirm-state');
    document.getElementById('cancel-cancel-btn').onclick = () => showState('mg-details-state');
    
    document.getElementById('final-cancel-btn').onclick = async () => {
        const btn = document.getElementById('final-cancel-btn');
        btn.disabled = true;
        btn.textContent = '...';
        
        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'cancel', uid: uid })
            });
            
            showState('mg-success-state');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 5000);
        } catch (error) {
            alert('Error cancelling appointment. Please try again.');
            btn.disabled = false;
            btn.textContent = i18n.t('mg.confirm_yes');
        }
    };

    document.getElementById('reschedule-btn').onclick = () => {
        const eventData = window.currentEvent;
        if (!eventData) return;

        // Parse description for contact details
        const desc = eventData.description || "";
        const nameMatch = desc.match(/Όνομα:\s*(.*)/);
        const emailMatch = desc.match(/Email:\s*(.*)/);
        const phoneMatch = desc.match(/Τηλέφωνο:\s*(.*)/);
        const servicesMatch = desc.match(/Υπηρεσίες:\s*(.*)/);

        const params = new URLSearchParams();
        params.set('reschedule', 'true');
        params.set('uid', uid); // Keep reference to old UID if needed
        if (nameMatch) params.set('name', nameMatch[1].trim());
        if (emailMatch) params.set('email', emailMatch[1].trim());
        if (phoneMatch) params.set('phone', phoneMatch[1].trim());
        if (servicesMatch) params.set('services', servicesMatch[1].trim());
        
        const currentLang = i18n.getCurrentLang();
        params.set('lang', currentLang);

        window.location.href = `index.html?${params.toString()}#booking`;
    };
});

function showState(stateId) {
    const states = ['mg-loading-state', 'mg-not-found-state', 'mg-details-state', 'mg-cancel-confirm-state', 'mg-success-state'];
    states.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
    const activeEl = document.getElementById(stateId);
    if (activeEl) activeEl.classList.remove('hidden');
}

function populateDetails(event, uid) {
    window.currentEvent = event;
    document.getElementById('mg-event-title').textContent = event.title;
    
    const date = new Date(event.start);
    const locale = i18n.getCurrentLang() === 'el' ? 'el-GR' : 'en-GB';
    const displayTime = date.toLocaleDateString(locale, { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    document.getElementById('mg-display-time').textContent = displayTime;
    
    // Clean up description for UI (remove tech details like UID)
    let cleanDesc = event.description || "";
    cleanDesc = cleanDesc.replace(/UID: .*/, '').trim();
    document.getElementById('mg-event-desc').textContent = cleanDesc;
}

// Ensure i18n updates UI when language changes
document.addEventListener('languageChanged', () => {
    if (window.currentEvent) {
        populateDetails(window.currentEvent);
    }
});
