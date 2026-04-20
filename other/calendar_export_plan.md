# Custom Google Calendar Booking Widget Blueprint

This document contains everything needed to replicate the interactive 4-step Google Calendar Booking integration into another website. You can provide this file to an AI assistant in your other project and instruct it to: *"Integrate this booking system blueprint into my website."*

---

## 1. System Requirements & Features
- **Frontend**: A 4-step interactive widget (Calendar -> Time Slots -> User Details -> Success Confirmation).
- **Backend API**: Connected natively to a Google Apps Script Web App that reads directly from a Google Calendar.
- **Constraints**: 
  - Prevents booking on Sundays.
  - 6-hour minimum buffer (prevents booking times less than 6 hours into the future).
- **Automated Emails**: Sends an automated script email directly from the clinic's Gmail at **9:00 AM** on the exact morning of the client's scheduled appointment.

---

## 2. Frontend HTML Structure
Paste this where you want the booking widget to appear:

```html
<!-- Booking Widget -->
<section id="booking" class="booking-section bg-light">
    <div class="container container-narrow">
        <div class="section-header text-center">
            <h2 class="section-title">Κλείστε το Ραντεβού σας</h2>
            <p class="section-desc">Επιλέξτε ημερομηνία και ώρα για τη συνεδρία σας.</p>
        </div>
        
        <div class="booking-widget">
            <!-- Step 1: Calendar -->
            <div id="booking-step-1" class="booking-step active">
                <div class="calendar-header">
                    <button id="prev-week" class="calendar-nav-btn">&larr;</button>
                    <h3 id="calendar-month" class="calendar-month">...</h3>
                    <button id="next-week" class="calendar-nav-btn">&rarr;</button>
                </div>
                <div class="calendar-grid" id="calendar-grid">
                    <!-- JS will populate the 14 days here -->
                </div>
                <div class="booking-loader" id="calendar-loader" style="display: none;">
                    <div class="spinner"></div><p>Έλεγχος διαθεσιμότητας...</p>
                </div>
            </div>

            <!-- Step 2: Time Slots -->
            <div id="booking-step-2" class="booking-step" style="display: none;">
                <button class="back-btn" onclick="goToStep(1)">&larr; <span>Πίσω στο Ημερολόγιο</span></button>
                <h3 class="step-title" id="selected-date-display">...</h3>
                <div class="time-slots-grid" id="time-slots-grid">
                    <!-- JS will populate available times -->
                </div>
            </div>

            <!-- Step 3: Details Form -->
            <div id="booking-step-3" class="booking-step" style="display: none;">
                <button class="back-btn" onclick="goToStep(2)">&larr; <span>Πίσω στις Ώρες</span></button>
                <h3 class="step-title">Στοιχεία Επικοινωνίας</h3>
                <p class="selected-slot-info mb-4 text-center">
                    <strong id="final-date-time">...</strong>
                </p>
                
                <form id="booking-form" class="custom-form">
                    <div class="form-group">
                        <label for="b-name">Ονοματεπώνυμο *</label>
                        <input type="text" id="b-name" required placeholder="π.χ. Μαρία Παπαδοπούλου">
                    </div>
                    <div class="form-group">
                        <label for="b-email">Email *</label>
                        <input type="email" id="b-email" required placeholder="maria@example.com">
                    </div>
                    <div class="form-group">
                        <label for="b-phone">Κινητό Τηλέφωνο *</label>
                        <input type="tel" id="b-phone" required placeholder="6930000000">
                    </div>
                    
                    <button type="submit" class="btn btn-primary w-100" id="submit-booking-btn">
                        <span>Επιβεβαίωση Ραντεβού</span>
                    </button>
                    <div class="booking-loader mt-4" id="submit-loader" style="display: none;">
                        <div class="spinner"></div><p>Καταχώρηση...</p>
                    </div>
                </form>
            </div>

            <!-- Step 4: Success Message -->
            <div id="booking-step-4" class="booking-step text-center" style="display: none;">
                <div class="success-icon">✓</div>
                <h3 class="step-title">Το ραντεβού σας επιβεβαιώθηκε!</h3>
                <p>Θα λάβετε σύντομα ένα email επιβεβαίωσης. Σας περιμένουμε!</p>
                <button class="btn btn-secondary mt-4" onclick="location.reload()">Νέο Ραντεβού</button>
            </div>
        </div>
    </div>
</section>
```

---

## 3. Frontend JavaScript Logic
Attach this code to control the widget UI and simulate fetching availability:

```javascript
const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE"; 

let selectedDate = null;
let selectedTime = null;
let currentWeekStart = new Date();

// Initialize week to today
currentWeekStart.setHours(0,0,0,0);
const day = currentWeekStart.getDay();
const diff = currentWeekStart.getDate() - day + (day === 0 ? -6 : 1);
currentWeekStart.setDate(diff);

function goToStep(stepNumber) {
    document.querySelectorAll('.booking-step').forEach(el => el.style.display = 'none');
    document.getElementById(`booking-step-${stepNumber}`).style.display = 'block';
    if (stepNumber === 1) renderCalendar();
}
window.goToStep = goToStep;

function renderCalendar() {
    const grid = document.getElementById('calendar-grid');
    const monthLabel = document.getElementById('calendar-month');
    grid.innerHTML = '';
    
    // Day Headers
    ['Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ', 'Κυρ'].forEach(d => {
        const div = document.createElement('div');
        div.className = 'day-header';
        div.textContent = d;
        grid.appendChild(div);
    });

    const today = new Date();
    today.setHours(0,0,0,0);
    let monthName = "";
    
    // Generate 35 days (5 weeks)
    for (let i = 0; i < 35; i++) {
        const date = new Date(currentWeekStart);
        date.setDate(date.getDate() + i);
        
        if (i === 0 || i === 7) { 
            const m = date.toLocaleString('el-GR', { month: 'long', year: 'numeric' });
            if (!monthName.includes(m)) monthName += (monthName ? " - " : "") + m;
        }

        const btn = document.createElement('button');
        btn.className = 'date-btn';
        btn.textContent = date.getDate();
        
        // Disable past dates, Sundays (0)
        if (date < today || date.getDay() === 0) {
            btn.classList.add('disabled');
        } else {
            btn.onclick = () => selectDate(date);
        }
        
        if (selectedDate && date.getTime() === selectedDate.getTime()) {
            btn.classList.add('active');
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
    return date.toISOString().split('T')[0];
}

function formatDateDisplay(date) {
    return date.toLocaleDateString('el-GR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

async function fetchAndShowSlots(date) {
    document.getElementById('calendar-loader').style.display = 'flex';
    document.getElementById('selected-date-display').textContent = formatDateDisplay(date);
    
    const slotsGrid = document.getElementById('time-slots-grid');
    slotsGrid.innerHTML = '';
    
    // Phone only on Saturdays
    if (date.getDay() === 6) {
        document.getElementById('calendar-loader').style.display = 'none';
        slotsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Για ραντεβού το Σάββατο, επικοινωνήστε τηλεφωνικά.</p>`;
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

        if (availableSlots.length === 0) {
            slotsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Δεν υπάρχουν διαθέσιμες ώρες για αυτή την ημερομηνία.</p>`;
        } else {
            availableSlots.forEach(time => {
                const btn = document.createElement('button');
                btn.className = 'time-slot-btn';
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
        today.setHours(0,0,0,0);
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
        
        const payload = {
            action: 'book',
            date: formatDateAPI(selectedDate),
            time: selectedTime,
            name: document.getElementById('b-name').value,
            email: document.getElementById('b-email').value,
            phone: document.getElementById('b-phone').value
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
            alert("Σφάλμα συστήματος. Παρακαλώ δοκιμάστε ξανά.");
        } finally {
            btn.disabled = false;
            loader.style.display = 'none';
        }
    });
});
```

---

## 4. Google Apps Script Backend (Calendar API + Auto Email)
Paste this into a new Google Apps Script deployed as a Web App to enable live API checking and the 9:00 AM triggered email.

```javascript
// --- CONFIGURATION ---
const SERVICE_DURATION = 60; 
const CALENDAR_NAMES = ['Online Appointment', 'Dental Office', "M's calendar"]; // 'Online Appointment' is now primary

// Military time: 10 = 10:00 AM, 20 = 8:00 PM
const CLINIC_HOURS = {
  1: { start: 10, end: 20 }, // Mon
  2: { start: 10, end: 20 }, // Tue
  3: { start: 10, end: 20 }, // Wed
  4: { start: 10, end: 20 }, // Thu
  5: { start: 10, end: 20 }, // Fri
  6: null, // Sat
  0: null  // Sun
};

const BLOCKED_DATES = [];
const SENDER_ALIAS = '1123alberto@gmail.com'; 
const SENDER_NAME = "Οδοντιατρείο - A. Moshopoulos - Dental Clinic"; 
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
  
  if (action === 'getAppointment') {
    return handleGetAppointment(e.parameter.uid);
  }

  if (action === 'getBusyDays') {
    return handleGetBusyDays(e);
  }

  // Default action: getSlots
  const dateStr = e.parameter.date; 
  if (!dateStr) return respondJSON({ error: "No date provided." });

  const [year, month, day] = dateStr.split('-').map(Number);
  const targetDate = new Date(year, month - 1, day);
  const dayOfWeek = targetDate.getDay();
  
  const hours = CLINIC_HOURS[dayOfWeek];
  if (!hours || BLOCKED_DATES.includes(dateStr)) {
    return respondJSON({ date: dateStr, slots: [] }); 
  }

  const allCals = getCalendars();
  const startOfDay = new Date(year, month - 1, day, 0, 0, 0);
  const endOfDay = new Date(year, month - 1, day, 23, 59, 59);
  
  let busyPeriods = [];
  allCals.forEach(cal => {
    const events = cal.getEvents(startOfDay, endOfDay);
    events.forEach(ev => {
      // 1. Skip All-day events unless they specifically intend to BLOCK the day
      if (ev.isAllDayEvent()) {
        if (ev.getTitle().toUpperCase().includes("[BLOCK]")) {
          busyPeriods.push({ start: startOfDay, end: endOfDay });
        }
        return;
      }

      // 2. Add busy periods for timed events
      busyPeriods.push({
        start: ev.getStartTime(),
        end: ev.getEndTime()
      });
    });
  });
  busyPeriods.sort((a, b) => a.start - b.start);
  
  let availableSlots = [];
  const now = new Date(); 
  const minSlotTime = new Date(now.getTime() + 6 * 60 * 60 * 1000); // 6-hour minimum buffer

  const allowedHours = [10, 11, 12, 13, 17, 18, 19];
  
  for (let h of allowedHours) {
    const currentSlotTime = new Date(year, month - 1, day, h, 0, 0);
    const slotEnd = new Date(currentSlotTime.getTime() + SERVICE_DURATION * 60000);
    
    if (currentSlotTime > minSlotTime) {
      let isOverlapping = false;
      for (const busy of busyPeriods) {
        if (currentSlotTime < busy.end && slotEnd > busy.start) {
          isOverlapping = true; break;
        }
      }
      
      if (!isOverlapping) {
        availableSlots.push(`${h.toString().padStart(2, '0')}:00`);
      }
    }
  }
  return respondJSON({ date: dateStr, slots: availableSlots });
}

function handleGetBusyDays(e) {
  const year = parseInt(e.parameter.year);
  const month = parseInt(e.parameter.month);
  if (!year || !month) return respondJSON({ error: "Year and Month required." });

  const startOfMonth = new Date(year, month - 1, 1, 0, 0, 0);
  const endOfMonth = new Date(year, month, 0, 23, 59, 59);
  
  const allCals = getCalendars();
  let allEvents = [];
  allCals.forEach(cal => {
    allEvents = allEvents.concat(cal.getEvents(startOfMonth, endOfMonth));
  });

  let busyDays = [];
  const lastDay = endOfMonth.getDate();
  for (let d = 1; d <= lastDay; d++) {
    const dStart = new Date(year, month - 1, d, 0, 0, 0);
    const dEnd = new Date(year, month - 1, d, 23, 59, 59);
    const dateStr = Utilities.formatDate(dStart, Session.getScriptTimeZone(), "yyyy-MM-dd");

    const dayEvents = allEvents.filter(ev => ev.getStartTime() < dEnd && ev.getEndTime() > dStart);

    // [BLOCK] check
    if (dayEvents.some(ev => ev.isAllDayEvent() && ev.getTitle().toUpperCase().includes("[BLOCK]"))) {
      busyDays.push(dateStr);
      continue;
    }

    // Fully Booked check
    const allowedHours = [10, 11, 12, 13, 17, 18, 19];
    let busySlots = 0;
    allowedHours.forEach(h => {
      const slotStart = new Date(year, month - 1, d, h, 0, 0);
      const slotEnd = new Date(slotStart.getTime() + SERVICE_DURATION * 60000);
      if (dayEvents.some(ev => !ev.isAllDayEvent() && slotStart < ev.getEndTime() && slotEnd > ev.getStartTime())) {
        busySlots++;
      }
    });

    if (busySlots >= allowedHours.length) busyDays.push(dateStr);
  }

  return respondJSON({ busyDays: busyDays });
}

function handleGetAppointment(uid) {
  if (!uid) return respondJSON({ error: "No UID provided." });
  
  const now = new Date();
  const future = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000); // Look 60 days ahead
  const allCals = getCalendars();
  
  for (const cal of allCals) {
    const events = cal.getEvents(now, future);
    for (const ev of events) {
      const desc = ev.getDescription();
      if (desc.includes(`UID: ${uid}`)) {
        return respondJSON({
          success: true,
          event: {
            title: ev.getTitle(),
            start: ev.getStartTime(),
            description: desc,
            id: ev.getId()
          }
        });
      }
    }
  }
  return respondJSON({ error: "Appointment not found." });
}

function doPost(e) {
  try {
    const postData = JSON.parse(e.postData.contents);
    
    // --- Cancel Action ---
    if (postData.action === 'cancel') {
      const { uid } = postData;
      const now = new Date();
      const future = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000);
      const allCals = getCalendars();
      
      for (const cal of allCals) {
        const events = cal.getEvents(now, future);
        for (const ev of events) {
          if (ev.getDescription().includes(`UID: ${uid}`)) {
            const dateStr = Utilities.formatDate(ev.getStartTime(), Session.getScriptTimeZone(), "yyyy-MM-dd");
            ev.deleteEvent();
            
            // Cleanup Trigger
            cleanupTriggerByUID(uid);
            
            // Notify Admin
            sendAdminCancellationAlert(uid, ev.getTitle(), ev.getStartTime());
            
            return respondJSON({ success: true, message: "Appointment cancelled." });
          }
        }
      }
      return respondJSON({ error: "Appointment not found." });
    }

    // --- Book Action ---
    if (postData.action === 'book') {
      const { date, time, name, email, phone, services, rescheduleUid } = postData;
      const uid = Math.random().toString(36).substring(2, 10).toUpperCase();
      
      const [year, month, day] = date.split('-').map(Number);
      const [hour, minute] = time.split(':').map(Number);
      
      const startTime = new Date(year, month - 1, day, hour, minute);
      const endTime = new Date(startTime.getTime() + SERVICE_DURATION * 60000);
      
      const title = name;
      const description = `Νέο Ραντεβού από Website\n\nΌνομα: ${name}\nΤηλέφωνο: ${phone}\nEmail: ${email}\nΥπηρεσίες: ${services || 'Δεν επιλέχθηκε καμία'}\n\nUID: ${uid}`;
      
      getPrimaryCalendar().createEvent(title, startTime, endTime, { description: description });
      
      // Handle Rescheduling Logic
      if (rescheduleUid) {
        let oldDetails = "Unknown";
        const allCals = getCalendars();
        const now = new Date();
        const future = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000);
        
        for (const cal of allCals) {
          const events = cal.getEvents(now, future);
          for (const ev of events) {
            if (ev.getDescription().includes(`UID: ${rescheduleUid}`)) {
              oldDetails = Utilities.formatDate(ev.getStartTime(), Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm");
              ev.deleteEvent();
              cleanupTriggerByUID(rescheduleUid);
              break;
            }
          }
        }
        sendAdminRescheduleNotification(name, email, phone, `${date} ${time}`, services, uid, oldDetails);
      } else {
        // Notify Admin (Normal Booking)
        sendAdminNotification(name, email, phone, `${date} ${time}`, services, uid);
      }
      
      // Send immediate confirmation with Manage link
      sendInitialConfirmationEmail(email, name, startTime, uid);
      
      // Schedule reminder
      scheduleReminderEmail(email, name, startTime, uid);
      
      return respondJSON({ success: true, message: "Appointment created.", uid: uid });
    }
  } catch (error) { return respondJSON({ error: error.toString() }); }
}

function respondJSON(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

// -- Scheduled Email Engine --
function scheduleReminderEmail(email, name, dateObj, uid) {
  const reminderTime = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), 9, 0, 0);
  if (reminderTime <= new Date()) {
    // If it's already past 9am on that day, no reminder
    return;
  } else {
    const trigger = ScriptApp.newTrigger('processReminderEmail').timeBased().at(reminderTime).create();
    PropertiesService.getScriptProperties().setProperty('trigger_' + uid, trigger.getUniqueId());
    PropertiesService.getScriptProperties().setProperty('data_' + trigger.getUniqueId(), JSON.stringify({email: email, name: name}));
  }
}

function cleanupTriggerByUID(uid) {
  const props = PropertiesService.getScriptProperties();
  const triggerId = props.getProperty('trigger_' + uid);
  if (triggerId) {
    const triggers = ScriptApp.getProjectTriggers();
    for (let i = 0; i < triggers.length; i++) {
      if (triggers[i].getUniqueId() === triggerId) {
        ScriptApp.deleteTrigger(triggers[i]);
        break;
      }
    }
    props.deleteProperty('trigger_' + uid);
    props.deleteProperty('data_' + triggerId);
  }
}

function processReminderEmail(e) {
  const triggerId = e.triggerUid;
  const props = PropertiesService.getScriptProperties();
  const dataStr = props.getProperty('data_' + triggerId);
  
  if (dataStr) {
    const data = JSON.parse(dataStr);
    sendReminderEmail(data.email, data.name);
    props.deleteProperty('data_' + triggerId);
    // Note: To truly cleanup, we'd need to reverse lookup the UID to delete 'trigger_UID' property, 
    // but it's not strictly necessary for functionality.
  }
  
  const triggers = ScriptApp.getProjectTriggers();
  for (let i = 0; i < triggers.length; i++) {
    if (triggers[i].getUniqueId() === triggerId) {
      ScriptApp.deleteTrigger(triggers[i]);
      break;
    }
  }
}

function sendReminderEmail(email, name) {
  const subject = "Υπενθύμιση Ραντεβού (Dentplant Clinic) / Appointment Reminder";
  const dateStr = Utilities.formatDate(dateObj, Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm");
  
  const body = `Γεια σας ${name},

Σας υπενθυμίζουμε το σημερινό σας ραντεβού στο ιατρείο μας. 

Με εκτίμηση,
H Ομάδα του Dentplant Clinic

---------------------------------------

Hello ${name},

This is a reminder for your appointment at our clinic today.

Sincerely,
The Dentplant Clinic Team`;

  if (SENDER_ALIAS !== '') {
    GmailApp.sendEmail(email, subject, body, { from: SENDER_ALIAS, name: SENDER_NAME });
  } else {
    MailApp.sendEmail(email, subject, body, { name: SENDER_NAME });
  }
}

function sendInitialConfirmationEmail(email, name, dateObj, uid) {
  const subject = "Επιβεβαίωση Ραντεβού (Dentplant Clinic) / Appointment Confirmation";
  const dateStr = Utilities.formatDate(dateObj, Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm");
  const manageUrl = `https://dentplant.gr/manage.html?uid=${uid}`;
  
  const body = `Γεια σας ${name},

Ευχαριστούμε για την κράτησή σας! Το ραντεβού σας επιβεβαιώθηκε για τις: ${dateStr}.

Μπορείτε να διαχειριστείτε ή να ακυρώσετε το ραντεβού σας εδώ:
${manageUrl}

Με εκτίμηση,
H Ομάδα του Dentplant Clinic

----------------------------------------

Hello ${name},

Thank you for your booking! Your appointment is confirmed for: ${dateStr}.

You can manage or cancel your appointment here:
${manageUrl}

Sincerely,
The Dentplant Clinic Team`;

  if (SENDER_ALIAS !== '') {
    GmailApp.sendEmail(email, subject, body, { from: SENDER_ALIAS, name: SENDER_NAME });
  } else {
    MailApp.sendEmail(email, subject, body, { name: SENDER_NAME });
  }
}

/**
 * Sends a notification email to the clinic owner about the new appointment.
 */
function sendAdminNotification(name, email, phone, slotStr, services, uid) {
  const adminEmail = '1123alberto@gmail.com'; 
  const subject = "★ New Appointment - " + name;
  const body = `You have a new online appointment!

DETAILS:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Date/Time: ${slotStr}
- Services: ${services || 'None'}
- UID: ${uid}

Go to your Google Calendar to view more details.`;

  if (SENDER_ALIAS !== '') {
    GmailApp.sendEmail(adminEmail, subject, body, { from: SENDER_ALIAS, name: SENDER_NAME });
  } else {
    MailApp.sendEmail(adminEmail, subject, body, { name: SENDER_NAME });
  }
}

function sendAdminCancellationAlert(uid, title, startTime) {
  const adminEmail = '1123alberto@gmail.com';
  const dateStr = Utilities.formatDate(startTime, Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm");
  const subject = "⚠️ Appointment CANCELLED - " + title;
  const body = `The appointment has been cancelled by the patient.

DETAILS:
- Title: ${title}
- Original Time: ${dateStr}
- UID: ${uid}

The event and its 9:00 AM reminder have been removed from the system.`;

  if (SENDER_ALIAS !== '') {
    GmailApp.sendEmail(adminEmail, subject, body, { from: SENDER_ALIAS, name: SENDER_NAME });
  } else {
    MailApp.sendEmail(adminEmail, subject, body, { name: SENDER_NAME });
  }
}

/**
 * Sends a notification email to the clinic owner specifically about a RESCHEDULED appointment.
 */
function sendAdminRescheduleNotification(name, email, phone, slotStr, services, uid, oldDetails) {
  const adminEmail = '1123alberto@gmail.com'; 
  const subject = "★ RESCHEDULED Appointment - " + name;
  const body = `A patient has changed their appointment date!
  
OLD APPOINTMENT:
- Original Time: ${oldDetails}

NEW APPOINTMENT DETAILS:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- New Date/Time: ${slotStr}
- Services: ${services || 'None'}
- New UID: ${uid}

The old event has been automatically removed from your calendar.`;

  if (SENDER_ALIAS !== '') {
    GmailApp.sendEmail(adminEmail, subject, body, { from: SENDER_ALIAS, name: SENDER_NAME });
  } else {
    MailApp.sendEmail(adminEmail, subject, body, { name: SENDER_NAME });
  }
}
```
