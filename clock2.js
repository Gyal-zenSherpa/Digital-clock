let alarmTime = null;
const alarmSound = document.getElementById('alarmSound');


// Update the clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours() % 12 || 12).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const isAm = now.getHours() < 12;

    const timeString = `${hours}:${minutes}:${seconds} ${isAm ? 'AM' : 'PM'}`;
    document.getElementById('time').textContent = timeString;

    // Update date and day of the week
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    const dayString = now.toLocaleDateString(undefined, { weekday: 'long' });
    document.getElementById('date').textContent = dateString;
    document.getElementById('day').textContent = dayString;

    // Check if alarm time matches the current time and alert
    if (alarmTime && `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}` === alarmTime) {
        alert("Alarm ringing!");
        alarmTime = null; // Reset alarm after triggering
    }
}

// Set alarm functionality
document.getElementById('setAlarm').addEventListener('click', function() {
    const alarmInput = document.getElementById('alarmTime').value;
    if (alarmInput) {
        alarmTime = alarmInput;
        document.getElementById('alarm').textContent = "Alarm set for: " + alarmTime;
    } else {
        alert("Please set an alarm time.");
    }
});

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);