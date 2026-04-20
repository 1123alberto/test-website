const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyMjJ9NRRr1CvbhjIw851gnh8Bj_mFUVRczU9K0mJjybt1hP8NPl_2DnyLKbP1SWI5X/exec';

/**
 * Local Blocking Configuration
 * dates: Array of YYYY-MM-DD strings to block entire days.
 * slots: Object with YYYY-MM-DD keys and arrays of HH:MM strings to block specific slots.
 */
const BLOCKED_CONFIG = {
    dates: ['2026-04-10', '2026-04-11', '2026-04-13', '2026-04-14', '2026-05-01'], // e.g. ['2026-04-10', '2026-04-11', '2026-04-13', '2026-04-14', '2026-05-01']
    slots: {}  // e.g. { '2026-04-10': ['10:00', '13:00'] }
};

let selectedDate = null;
let selectedTime = null;
let currentViewDate = new Date();
let monthlyBusyData = {}; // Cache for { 'YYYY-MM': [dates] }
let isFetchingBusyDays = false;

// Initialize to the 1st of the current month
currentViewDate.setDate(1);
currentViewDate.setHours(0, 0, 0, 0);

function goToStep(stepNumber) {
    document.querySelectorAll('.booking-step').forEach(el => el.classList.remove('active'));
    document.getElementById(`booking-step-${stepNumber}`).classList.add('active');

    // Dynamically widen container for 2-column details step
    const wrapper = document.querySelector('.booking-standalone-wrapper');
    if (wrapper) {
        if (stepNumber === 3) {
            wrapper.style.maxWidth = '700px';
        } else {
            wrapper.style.maxWidth = '500px';
        }
    }

    const header = document.getElementById('booking-main-header');
    if (header) {
        header.style.display = stepNumber === 1 ? 'block' : 'none';
    }

    if (stepNumber === 1) renderCalendar();
}
window.goToStep = goToStep;

async function fetchMonthlyBusyDays(year, month) {
    if (isFetchingBusyDays || GOOGLE_SCRIPT_URL.includes("YOUR_GOOGLE_APPS_SCRIPT_URL")) return;
    
    isFetchingBusyDays = true;
    const key = `${year}-${month}`;
    const loader = document.getElementById('calendar-loader');
    if (loader) loader.style.display = 'flex';

    try {
        const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getBusyDays&year=${year}&month=${month}`);
        const data = await response.json();
        monthlyBusyData[key] = data.busyDays || [];
        renderCalendar(); // Re-render once data is in
    } catch (e) {
        console.error("Failed to fetch monthly data", e);
        monthlyBusyData[key] = []; // Fallback to empty on error
    } finally {
        isFetchingBusyDays = false;
        if (loader) loader.style.display = 'none';
    }
}

function renderCalendar() {
    const grid = document.getElementById('calendar-grid');
    const monthLabel = document.getElementById('calendar-month');
    grid.innerHTML = '';

    const year = currentViewDate.getFullYear();
    const month = currentViewDate.getMonth() + 1;
    const key = `${year}-${month}`;

    // If we don't have data for this month, fetch it
    if (!monthlyBusyData.hasOwnProperty(key)) {
        fetchMonthlyBusyDays(year, month);
    }

    const busyDays = monthlyBusyData[key] || [];

    // Day Headers
    const days = (window.i18n ? window.i18n.t('js.days') : ['Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ', 'Κυρ']);
    days.forEach(d => {
        const div = document.createElement('div');
        div.className = 'day-header font-bold text-[#1a365d] text-xs mb-1';
        div.textContent = d;
        grid.appendChild(div);
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Calculate Grid Start (Monday of the first week)
    const gridStart = new Date(currentViewDate);
    const dayOfWeek = gridStart.getDay(); // 0 (Sun) to 6 (Sat)
    const padding = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // 0 for Mon, 6 for Sun
    gridStart.setDate(gridStart.getDate() - padding);

    // Month Label
    const locale = window.i18n ? window.i18n.t('js.locale') : 'el-GR';
    monthLabel.textContent = currentViewDate.toLocaleString(locale, { month: 'long', year: 'numeric' });

    // Generate 35 days (5 weeks)
    for (let i = 0; i < 35; i++) {
        const date = new Date(gridStart);
        date.setDate(date.getDate() + i);

        const btn = document.createElement('button');
        btn.className = 'date-btn p-1 rounded-lg w-9 h-9 mx-auto flex items-center justify-center font-semibold text-sm transition-all text-[#1a365d] hover:bg-gray-100 hover:text-[#0284c7]';
        btn.textContent = date.getDate();

        const dateStr = formatDateAPI(date);
        const isPast = date < today;
        const isCurrentMonth = date.getMonth() === currentViewDate.getMonth();
        const isSunday = date.getDay() === 0;
        const isBlocked = BLOCKED_CONFIG.dates.includes(dateStr) || busyDays.includes(dateStr);

        // Disable if: past, Sunday, blocked (static or dynamic), OR not in the current month view
        if (isPast || isSunday || isBlocked || !isCurrentMonth) {
            btn.className = 'date-btn disabled p-1 w-9 h-9 mx-auto flex items-center justify-center font-normal text-sm text-gray-300 cursor-not-allowed';
            btn.disabled = true;
            
            // If it's a padding day (not in month), make it even more subtle but still visible as requested
            if (!isCurrentMonth) {
                btn.style.opacity = "0.4";
            }
        } else {
            btn.onclick = () => selectDate(date);
        }

        const isSelected = selectedDate && date.getTime() === selectedDate.getTime();
        const isToday = date.getTime() === today.getTime();

        if (isSelected) {
            btn.className = 'date-btn bg-[#0284c7] text-white rounded-lg w-9 h-9 mx-auto flex items-center justify-center font-bold text-sm shadow-sm';
            btn.style.opacity = "1";
        } else if (isToday && isCurrentMonth) {
            // Apply today indicator only if it's the actual current month view
            btn.classList.add('today-date');
        }

        grid.appendChild(btn);
    }

    // Handle Navigation limits
    const prevBtn = document.getElementById('prev-week');
    const nextBtn = document.getElementById('next-week');

    // Disable Prev if we are in the current month
    const currentMonthFirst = new Date(today);
    currentMonthFirst.setDate(1);
    currentMonthFirst.setHours(0, 0, 0, 0);
    prevBtn.disabled = currentViewDate <= currentMonthFirst;
    prevBtn.style.opacity = prevBtn.disabled ? "0.3" : "1";

    // Disable Next if we are already seeing the next month
    const nextMonthLimit = new Date(currentMonthFirst);
    nextMonthLimit.setMonth(nextMonthLimit.getMonth() + 1);
    nextBtn.disabled = currentViewDate >= nextMonthLimit;
    nextBtn.style.opacity = nextBtn.disabled ? "0.3" : "1";
}


function selectDate(date) {
    selectedDate = date;
    fetchAndShowSlots(date);
}

function formatDateAPI(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function formatDateDisplay(date) {
    const locale = window.i18n ? window.i18n.t('js.locale') : 'el-GR';
    return date.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

async function fetchAndShowSlots(date) {
    document.getElementById('calendar-loader').style.display = 'flex';
    document.getElementById('selected-date-display').textContent = formatDateDisplay(date);

    const slotsGrid = document.getElementById('time-slots-grid');
    slotsGrid.innerHTML = '';

    // Phone only on Saturdays
    if (date.getDay() === 6) {
        document.getElementById('calendar-loader').style.display = 'none';
        const satMsg = window.i18n ? window.i18n.t('js.saturday') : 'Για ραντεβού το Σάββατο, παρακαλώ επικοινωνήστε μαζί μας τηλεφωνικά στο <a href="tel:2109312651" class="font-bold text-[#0284c7] hover:underline whitespace-nowrap">210 931 2651</a>.';
        slotsGrid.innerHTML = `<div style="grid-column: 1/-1;" class="text-center my-6"><p class="text-[#475569] text-sm md:text-[15px] leading-relaxed">${satMsg}</p></div>`;
        goToStep(2);
        return;
    }

    try {
        let availableSlots = [];

        if (GOOGLE_SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
            await new Promise(r => setTimeout(r, 800)); // Test mode simulation delay
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;
            const hourLimit = isWeekend ? 0 : 20;

            const allowedHours = [10, 11, 12, 13, 17, 18, 19];
            for (let h of allowedHours) {
                const now = new Date();
                const minTime = new Date(now.getTime() + 6 * 60 * 60 * 1000); // 6 hour buffer
                const slotTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, 0, 0);
                if (slotTime > minTime && h < hourLimit) {
                    availableSlots.push(`${h}:00`);
                }
            }
        } else {
            // Live google fetch
            const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getSlots&date=${formatDateAPI(date)}`);
            const data = await response.json();
            availableSlots = data.slots;
        }

        // Filter against local blocked slots
        const dateStr = formatDateAPI(date);
        if (BLOCKED_CONFIG.slots[dateStr]) {
            availableSlots = availableSlots.filter(s => !BLOCKED_CONFIG.slots[dateStr].includes(s));
        }

        if (availableSlots.length === 0) {
            const noSlotsMsg = window.i18n ? window.i18n.t('js.noslots') : 'Δεν υπάρχουν διαθέσιμες ώρες για αυτή την ημερομηνία.';
            slotsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center;" class="text-red-500 font-medium my-4 text-sm">${noSlotsMsg}</p>`;
        } else {
            availableSlots.forEach(time => {
                const btn = document.createElement('button');
                btn.className = 'time-slot-btn py-3 px-4 rounded-full border border-gray-100 bg-[#f8fafc] text-[#0f172a] hover:border-gray-300 hover:shadow-sm transition text-sm font-bold';
                btn.textContent = time;
                btn.onclick = () => selectTime(time);
                slotsGrid.appendChild(btn);
            });
        }

    } finally {
        document.getElementById('calendar-loader').style.display = 'none';
        goToStep(2);
    }
}

function selectTime(time) {
    selectedTime = time;
    document.getElementById('final-date-time').textContent = `${formatDateDisplay(selectedDate)} | ${time}`;
    goToStep(3);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('prev-week').onclick = () => {
        currentViewDate.setMonth(currentViewDate.getMonth() - 1);
        renderCalendar();
    };

    document.getElementById('next-week').onclick = () => {
        currentViewDate.setMonth(currentViewDate.getMonth() + 1);
        renderCalendar();
    };

    renderCalendar();

    // Form Submission
    document.getElementById('booking-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = document.getElementById('submit-booking-btn');
        const loader = document.getElementById('submit-loader');

        btn.disabled = true;
        loader.style.display = 'flex';

        // Collect checked services
        const selectedServices = Array.from(document.querySelectorAll('input[name="services"]:checked')).map(cb => {
            if (cb.value === "other") {
                return document.getElementById('other-service-input').value || (window.i18n ? window.i18n.t('js.other') : 'Άλλο');
            }
            return cb.value;
        }).join(', ') || (window.i18n ? window.i18n.t('js.noservice') : 'Καμία υπηρεσία επιλεγμένη');

        const payload = {
            action: 'book',
            date: formatDateAPI(selectedDate),
            time: selectedTime,
            name: document.getElementById('b-name').value,
            email: document.getElementById('b-email').value,
            phone: document.getElementById('b-phone').value,
            services: selectedServices,
            rescheduleUid: window.rescheduleUid || null
        };

        try {
            if (GOOGLE_SCRIPT_URL !== "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
                await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
            } else {
                await new Promise(r => setTimeout(r, 1500)); // Test mode
            }
            goToStep(4);
        } catch (error) {
            alert(window.i18n ? window.i18n.t('js.error') : 'Σφάλμα συστήματος. Παρακαλώ δοκιμάστε ξανά.');
        } finally {
            btn.disabled = false;
            loader.style.display = 'none';
        }
    });

    /* Re-render calendar day-headers when language switches */
    document.addEventListener('languageChanged', () => renderCalendar());

    /* Pre-fill logic for rescheduling */
    prefillBookingForm();
});

function prefillBookingForm() {
    const urlParams = new URLSearchParams(window.location.search);

    // Check for lang parameter
    const lang = urlParams.get('lang');
    if (lang && (lang === 'en' || lang === 'el')) {
        if (window.i18n) window.i18n.applyLanguage(lang);
    }

    if (!urlParams.has('reschedule')) return;

    // Capture old UID for the backend to handle rescheduling
    window.rescheduleUid = urlParams.get('uid');

    // Pre-fill fields
    const fields = { 'name': 'b-name', 'email': 'b-email', 'phone': 'b-phone' };
    for (const [param, id] of Object.entries(fields)) {
        const val = urlParams.get(param);
        if (val) {
            const el = document.getElementById(id);
            if (el) el.value = val;
        }
    }

    // Pre-fill services
    const servicesStr = urlParams.get('services');
    if (servicesStr) {
        const services = servicesStr.split(',').map(s => s.trim());
        const checkboxes = document.querySelectorAll('input[name="services"]');
        checkboxes.forEach(cb => {
            if (services.includes(cb.value)) {
                cb.checked = true;
            }
        });

        // Handle "Other"
        const standardValues = Array.from(checkboxes).map(cb => cb.value);
        const otherServices = services.filter(s => s && !standardValues.includes(s) && s !== 'other' && s !== 'Άλλο');
        if (otherServices.length > 0) {
            const otherCb = document.getElementById('other-service-checkbox');
            const otherInput = document.getElementById('other-service-input');
            if (otherCb) otherCb.checked = true;
            if (otherInput) otherInput.value = otherServices.join(', ');
        }
    }

    // Open Modal and scroll to booking
    const modal = document.getElementById('booking-modal');
    if (modal && window.openModal) {
        window.openModal(modal);
        // Step 1 is default, which is correct for rescheduling
    }

    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
}
