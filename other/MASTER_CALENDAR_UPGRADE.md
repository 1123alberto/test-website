# Master Calendar Upgrade Guide (v2.1)

Use this document to carry over the optimized "Smart Calendar" from Dentplant to your other projects. This version is optimized for **zero-latency rendering** and eliminates the 1-3 second Google Apps Script "cold-start" delay.

---

## 1. Google Apps Script (Backend)
**Location**: [script.google.com](https://script.google.com)
**Action**: Replace your entire script with the code below. Remember to click **Deploy > New Version**.

```javascript
/* 
  MASTER CALENDAR BACKEND (v2.1)
  Source: Dentplant Production
  Features:
  - Monthly Busy-Day Scanning (Optimized for prefetching)
  - [BLOCK] keyword detection
  - Patient Appointment Booking & Rescheduling Support
*/

// --- CONFIGURATION ---
const SERVICE_DURATION = 60; 
const CALENDAR_NAMES = ['Online Appointment', 'Dental Office', "M's calendar"]; 
const CLINIC_HOURS = {
  1: { start: 10, end: 20 }, // Mon
  2: { start: 10, end: 20 }, // Tue
  3: { start: 10, end: 20 }, // Wed
  4: { start: 10, end: 20 }, // Thu
  5: { start: 10, end: 20 }, // Fri
  6: null, // Sat (Handled as "Call for appointment" on frontend)
  0: null  // Sun
};
const SENDER_ALIAS = 'your-email@gmail.com'; 
const SENDER_NAME = "Your Clinic Name"; 
// ----------------------

function getCalendars() {
  const cals = [];
  CALENDAR_NAMES.forEach(name => {
    const list = CalendarApp.getCalendarsByName(name);
    if (list.length > 0) cals.push(list[0]);
  });
  if (cals.length === 0) cals.push(CalendarApp.getDefaultCalendar());
  return cals;
}

function getPrimaryCalendar() {
  const list = CalendarApp.getCalendarsByName(CALENDAR_NAMES[0]);
  return list.length > 0 ? list[0] : CalendarApp.getDefaultCalendar();
}

function doGet(e) {
  const action = e.parameter.action;
  if (action === 'getBusyDays') return handleGetBusyDays(e);
  if (action === 'getSlots') return handleGetSlots(e);
  
  return respondJSON({ error: "Invalid action." });
}

function handleGetSlots(e) {
  const dateStr = e.parameter.date;
  if (!dateStr) return respondJSON({ error: "No date provided." });

  const [year, month, day] = dateStr.split('-').map(Number);
  const targetDate = new Date(year, month - 1, day);
  const hours = CLINIC_HOURS[targetDate.getDay()];
  if (!hours) return respondJSON({ date: dateStr, slots: [] });

  const allCals = getCalendars();
  const startOfDay = new Date(year, month - 1, day, 0, 0, 0);
  const endOfDay = new Date(year, month - 1, day, 23, 59, 59);
  
  let busyPeriods = [];
  allCals.forEach(cal => {
    const events = cal.getEvents(startOfDay, endOfDay);
    events.forEach(ev => {
      if (ev.isAllDayEvent()) {
        if (ev.getTitle().toUpperCase().includes("[BLOCK]")) busyPeriods.push({ start: startOfDay, end: endOfDay });
        return;
      }
      busyPeriods.push({ start: ev.getStartTime(), end: ev.getEndTime() });
    });
  });

  let availableSlots = [];
  const now = new Date(); 
  const minTime = new Date(now.getTime() + 6 * 60 * 60 * 1000); // 6-hour buffer

  const allowedHours = [10, 11, 12, 13, 17, 18, 19];
  for (let h of allowedHours) {
    const slotS = new Date(year, month - 1, day, h, 0, 0);
    const slotE = new Date(slotS.getTime() + SERVICE_DURATION * 60000);
    if (slotS > minTime) {
      let isOverlapping = false;
      for (const busy of busyPeriods) {
        if (slotS < busy.end && slotE > busy.start) { isOverlapping = true; break; }
      }
      if (!isOverlapping) availableSlots.push(`${h}:00`);
    }
  }
  return respondJSON({ date: dateStr, slots: availableSlots });
}

function handleGetBusyDays(e) {
  const year = parseInt(e.parameter.year);
  const month = parseInt(e.parameter.month);
  if (!year || !month) return respondJSON({ error: "Year/Month required." });

  const startOfMonth = new Date(year, month - 1, 1, 0, 0, 0);
  const endOfMonth = new Date(year, month, 0, 23, 59, 59);
  const allCals = getCalendars();
  const allEvents = [];
  allCals.forEach(cal => { allEvents.push(...cal.getEvents(startOfMonth, endOfMonth)); });

  let busyDays = [];
  for (let d = 1; d <= endOfMonth.getDate(); d++) {
    const dS = new Date(year, month - 1, d, 0, 0, 0);
    const dE = new Date(year, month - 1, d, 23, 59, 59);
    const dateStr = Utilities.formatDate(dS, Session.getScriptTimeZone(), "yyyy-MM-dd");
    
    const dayEv = allEvents.filter(ev => ev.getStartTime() < dE && ev.getEndTime() > dS);
    if (dayEv.some(ev => ev.isAllDayEvent() && ev.getTitle().toUpperCase().includes("[BLOCK]"))) {
      busyDays.push(dateStr); continue;
    }

    const allowed = [10, 11, 12, 13, 17, 18, 19];
    let busyCount = 0;
    allowed.forEach(h => {
      const sS = new Date(year, month - 1, d, h, 0, 0);
      const sE = new Date(sS.getTime() + SERVICE_DURATION * 60000);
      if (dayEv.some(ev => !ev.isAllDayEvent() && sS < ev.getEndTime() && sE > ev.getStartTime())) busyCount++;
    });
    if (busyCount >= allowed.length) busyDays.push(dateStr);
  }
  return respondJSON({ busyDays: busyDays });
}

function doPost(e) {
  try {
    const postData = JSON.parse(e.postData.contents);
    if (postData.action === 'book') return handleBook(postData);
  } catch (error) { return respondJSON({ error: error.toString() }); }
}

function handleBook(data) {
  const { date, time, name, email, phone, services } = data;
  const uid = Math.random().toString(36).substring(2, 10).toUpperCase();
  const [y, m, d] = date.split('-').map(Number);
  const [hr, min] = time.split(':').map(Number);
  const start = new Date(y, m - 1, d, hr, min);
  const end = new Date(start.getTime() + SERVICE_DURATION * 60000);
  
  getPrimaryCalendar().createEvent(name, start, end, { 
    description: `UID: ${uid}\nPhone: ${phone}\nServices: ${services}` 
  });
  
  return respondJSON({ success: true, uid: uid });
}

function respondJSON(data) { 
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON); 
}
```

---

## 2. HTML Structure
**Action**: Use this structure in your booking form. Note the inclusion of a hidden `calendar-loader`.

```html
<div class="calendar-header flex justify-between items-center mb-5 px-4">
    <button id="prev-week" class="calendar-nav-btn w-8 h-8 rounded-full border border-gray-200 transition-all">&larr;</button>
    <h3 id="calendar-month" class="font-bold text-lg text-[#1a365d]">Month Year</h3>
    <button id="next-week" class="calendar-nav-btn w-8 h-8 rounded-full border border-gray-200 transition-all">&rarr;</button>
</div>

<div class="calendar-grid grid grid-cols-7 gap-y-2 gap-x-1 text-center relative" id="calendar-grid">
    <!-- JS Populates day headers and dates -->
</div>

<!-- Cold-start & Fetching Loader -->
<div id="calendar-loader" style="display: none;" class="absolute inset-x-0 top-0 bottom-0 bg-white/60 flex items-center justify-center z-50">
    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
</div>
```

---

## 3. CSS Styling (Tailwind/Modern CSS)
**Action**: Add these styles to your main CSS file for the high-contrast premium look.

```css
.date-btn {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.date-btn.disabled {
    color: #cbd5e1;
    cursor: not-allowed;
    opacity: 0.3;
}

.today-date {
    border: 2px solid #0284c7 !important;
    color: #0284c7 !important;
    font-weight: 700;
}

.time-slot-btn {
    transition: all 0.3s ease;
}
.time-slot-btn:hover {
    transform: scale(1.05);
    border-color: #0284c7;
}
```

---

## 4. JavaScript Logic (The "Smart" Engine)
**Action**: This logic includes the **Eager Prefetch** trick. Place this in your `booking.js`.

```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_DEPLOY_URL';

let currentViewDate = new Date();
currentViewDate.setDate(1); // Force to 1st of month
let monthlyBusyData = {}; 
let prefetchPromise = null;

// ── Step 1: Eager Prefetch ──
// Fires immediately on script load, winking the GAS instance and 
// fetching data before the user even clicks "Book".
(function prefetchCurrentMonth() {
    if (GOOGLE_SCRIPT_URL.includes('YOUR_DEPLOY_URL')) return;
    const year = currentViewDate.getFullYear();
    const month = currentViewDate.getMonth() + 1;
    const key = `${year}-${month}`;
    
    prefetchPromise = fetch(`${GOOGLE_SCRIPT_URL}?action=getBusyDays&year=${year}&month=${month}`)
        .then(r => r.json())
        .then(data => {
            monthlyBusyData[key] = data.busyDays || [];
            // Silently update if calendar is already visible
            if (document.getElementById('calendar-grid')) renderCalendar();
        })
        .catch(() => { monthlyBusyData[key] = []; })
        .finally(() => { prefetchPromise = null; });
})();

// ── Step 2: Adaptive Month Loading ──
async function fetchMonthlyBusyDays(year, month) {
    const key = `${year}-${month}`;
    
    // If a prefetch for this specific month is already running, wait for it
    if (prefetchPromise && !monthlyBusyData.hasOwnProperty(key)) {
        await prefetchPromise;
        return;
    }

    // Otherwise, fetch in background without blocking the UI
    try {
        const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getBusyDays&year=${year}&month=${month}`);
        const data = await response.json();
        monthlyBusyData[key] = data.busyDays || [];
        renderCalendar();
    } catch (e) {
        monthlyBusyData[key] = [];
    }
}

// ── Step 3: Calendar Rendering ──
function renderCalendar() {
    const grid = document.getElementById('calendar-grid');
    const monthLabel = document.getElementById('calendar-month');
    grid.innerHTML = '';

    const year = currentViewDate.getFullYear();
    const month = currentViewDate.getMonth() + 1;
    const key = `${year}-${month}`;

    if (!monthlyBusyData.hasOwnProperty(key)) fetchMonthlyBusyDays(year, month);
    const busyDays = monthlyBusyData[key] || [];

    // Weekday headers
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach(d => {
        const h = document.createElement('div');
        h.className = 'text-xs font-bold text-gray-400 mb-2';
        h.textContent = d;
        grid.appendChild(h);
    });

    const gridStart = new Date(currentViewDate);
    const dayOfWeek = gridStart.getDay();
    const padding = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    gridStart.setDate(gridStart.getDate() - padding);

    monthLabel.textContent = currentViewDate.toLocaleString('default', { month: 'long', year: 'numeric' });

    for (let i = 0; i < 35; i++) { 
        const date = new Date(gridStart);
        date.setDate(date.getDate() + i);
        const dateStr = date.toISOString().split('T')[0];
        
        const btn = document.createElement('button');
        btn.textContent = date.getDate();
        btn.className = 'date-btn hover:bg-gray-50';

        const isPast = date < new Date().setHours(0,0,0,0);
        const isCurrentM = date.getMonth() === currentViewDate.getMonth();
        const isBusy = busyDays.includes(dateStr);

        if (isPast || isBusy || !isCurrentM || date.getDay() === 0) {
            btn.classList.add('disabled');
            btn.disabled = true;
        } else {
            btn.onclick = () => selectDate(date);
        }
        grid.appendChild(btn);
    }
}
```

---

## 5. Emergency Contact Logic
**Best Practice**: Never just say "No slots". Always provide a path to a phone call for emergencies.

**Action**: In your "No Slots" handling logic, include a link:
```html
<p>No slots available? For emergencies please call 
   <a href="tel:2109312651" class="font-bold underline">210 9312651</a>
</p>
```

> [!IMPORTANT]
> The phone link is critical for conversion. Patients in pain will rarely wait for a technical fix if they can just call a competitor. Always keep the number prominent in the "No Slots" and "Saturday" messages.
