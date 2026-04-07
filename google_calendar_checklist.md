# Google Calendar Integration Checklist

Follow these steps to connect your website's booking system to your Google Calendar.

### Step 1: Prepare Your Google Apps Script
1.  Log into the account where you want to manage the calendar (`1123alberto@gmail.com`). 
2.  Go to [script.google.com](https://script.google.com) and create a new project.
3.  Name the project (e.g., `Dentplant Booking API`).
4.  Copy the code from the **Google Apps Script Backend** section in your `calendar_export_plan.md` file and paste it into the script editor.
5.  **Note on Alias**: In the configuration section (Line 337), make sure `SENDER_ALIAS` is set to `'1123alberto@gmail.com'`. This is your primary Gmail address.
6.  **Important**: In the `CLINIC_HOURS` section, make sure the hours match your clinic's actual availability.
7.  **Enter Calendar Names**: In the `CALENDAR_NAMES` array, enter your three calendars: `['Online Appointment', 'Dental Office', "M's calendar"]`.
    - The system will check all three for "Busy" times.
    - New bookings will be saved to the **Online Appointment** calendar.

### Step 2: Deploy as a Web App
1.  Click **Deploy** > **New deployment**.
2.  Select **Web app** as the type.
3.  Set **Execute as** to `Me` (your Google account).
4.  Set **Who has access** to `Anyone` (this allows the website to communicate with the script).
5.  Click **Deploy**.
6.  **Authorize Access**: Follow the prompts to grant your script permission to manage your calendar and send emails.
7.  Copy the **Web App URL** provided at the end. It should end in `/exec`.

### Step 3: Link Your Website to the Script
1.  Open your `js/booking.js` file.
2.  Find the `GOOGLE_SCRIPT_URL` at the very top of the file (Line 1).
3.  Replace `"YOUR_GOOGLE_APPS_SCRIPT_URL_HERE"` with the URL you copied in the previous step.

### Step 4: Final Test
1.  Refresh your website and open the booking modal.
2.  Try to book a slot. 
3.  If successful, the appointment should appear on your Google Calendar immediately, and a confirmation email will be scheduled for the day of the appointment.

> [!TIP]
> If you encounter a "Script not found" error, ensure you have published the script as a **Web App** and that you're using the URL from the **New Deployment** dialog.
