const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyFFb53qyNdBBPDifTrGT3nHhdeWjEXzrpkxXCcDhPL9hwLAtnwqnLOKsHKKLduwSQB/exec';

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
let currentWeekStart = new Date();

// Initialize week to today
currentWeekStart.setHours(0, 0, 0, 0);
const day = currentWeekStart.getDay();
const diff = currentWeekStart.getDate() - day + (day === 0 ? -6 : 1);
currentWeekStart.setDate(diff);

function goToStep(stepNumber) {
    document.querySelectorAll('.booking-step').forEach(el => el.style.display = 'none');
    document.getElementById(`booking-step-${stepNumber}`).style.display = 'block';

    // Dynamically widen modal container for 2-column details step
    const modalContent = document.querySelector('#booking-modal > .bg-white');
    if (modalContent) {
        if (stepNumber === 3) {
            modalContent.classList.replace('max-w-[500px]', 'max-w-[600px]');
        } else {
            modalContent.classList.replace('max-w-[600px]', 'max-w-[500px]');
        }
    }

    const header = document.getElementById('booking-main-header');
    if (header) {
        header.style.display = stepNumber === 1 ? 'block' : 'none';
    }

    if (stepNumber === 1) renderCalendar();
}
window.goToStep = goToStep;

function renderCalendar() {
    const grid = document.getElementById('calendar-grid');
    const monthLabel = document.getElementById('calendar-month');
    grid.innerHTML = '';

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
    let monthName = "";

    // Generate 35 days (5 weeks)
    for (let i = 0; i < 35; i++) {
        const date = new Date(currentWeekStart);
        date.setDate(date.getDate() + i);

        if (i === 0 || i === 7) {
            const locale = window.i18n ? window.i18n.t('js.locale') : 'el-GR';
            const m = date.toLocaleString(locale, { month: 'long', year: 'numeric' });
            if (!monthName.includes(m)) monthName += (monthName ? " - " : "") + m;
        }

        const btn = document.createElement('button');
        btn.className = 'date-btn p-1 rounded-lg w-9 h-9 mx-auto flex items-center justify-center font-semibold text-sm transition-all text-[#1a365d] hover:bg-gray-100 hover:text-[#0284c7]';
        btn.textContent = date.getDate();

        // Disable past dates, Sundays (0), and blocked dates
        const dateStr = formatDateAPI(date);
        if (date < today || date.getDay() === 0 || BLOCKED_CONFIG.dates.includes(dateStr)) {
            btn.className = 'date-btn disabled p-1 w-9 h-9 mx-auto flex items-center justify-center font-normal text-sm text-gray-300 cursor-not-allowed';
            btn.disabled = true;
        } else {
            btn.onclick = () => selectDate(date);
        }

        if (selectedDate && date.getTime() === selectedDate.getTime()) {
            btn.className = 'date-btn bg-[#0284c7] text-white rounded-lg w-9 h-9 mx-auto flex items-center justify-center font-bold text-sm shadow-sm';
        }

        grid.appendChild(btn);
    }
    monthLabel.textContent = monthName;
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
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const day = today.getDay();
        const diff = today.getDate() - day + (day === 0 ? -6 : 1);
        const currentWeekStartForToday = new Date(today);
        currentWeekStartForToday.setDate(diff);

        const newStart = new Date(currentWeekStart);
        newStart.setDate(newStart.getDate() - 28);
        currentWeekStart = newStart < currentWeekStartForToday ? currentWeekStartForToday : newStart;
        renderCalendar();
    };

    document.getElementById('next-week').onclick = () => {
        const today = new Date();
        const maxFutureDate = new Date(today);
        maxFutureDate.setDate(today.getDate() + 35);

        const newStart = new Date(currentWeekStart);
        newStart.setDate(newStart.getDate() + 28);
        if (newStart < maxFutureDate) {
            currentWeekStart = newStart;
            renderCalendar();
        }
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
            services: selectedServices
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
