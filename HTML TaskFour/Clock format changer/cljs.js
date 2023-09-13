let is12HourFormat = true;

function toggleClockFormat() {
    is12HourFormat = !is12HourFormat;
    updateClock();
}

function updateClock() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";

    if (is12HourFormat)
    {
        if (hours > 12) 
        {
            hours -= 12;
        }
        if (hours === 0) 
        {
            hours = 12;
        }
    }
    if (minutes < 10) 
    {
        minutes = "0" + minutes;
    }

    const clockElement = document.getElementById("clock");
    clockElement.textContent = `${hours}:${minutes} ${is12HourFormat ? ampm : ""}`;
}


document.getElementById("toggleFormatButton").addEventListener("click", toggleClockFormat);

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock when the page loads
updateClock();
