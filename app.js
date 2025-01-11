// // Set the target date for Ramadan (March 1, 2025)
// const targetDate = new Date('March 1, 2025 00:00:00').getTime();

// // Function to update the countdown
// function updateCountdown() {
//     const now = new Date().getTime();
//     const distance = targetDate - now;

//     // Calculate the time remaining in days, hours, minutes, and seconds
//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Update the HTML elements with the remaining time
//     document.getElementById('days-number').textContent = days;
//     document.getElementById('hours-number').textContent = hours;
//     document.getElementById('minutes-number').textContent = minutes;
//     document.getElementById('seconds-number').textContent = seconds;

//     // If the countdown is finished, display a message
//     if (distance < 0) {
//         document.getElementById('countdown').innerHTML = "<h2>Ramadan has arrived!</h2>";
//     }
// }

// // Update the countdown every second
// setInterval(updateCountdown, 1000);

// // Initial call to set the countdown immediately
// updateCountdown();
// Set the target date for Ramadan (March 1, 2025)
const targetDate = new Date('March 1, 2025 00:00:00').getTime();

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Check if the distance is negative (countdown has finished)
    if (distance < 0) {
        document.getElementById('countdown').innerHTML = "<h2>Ramadan has arrived!</h2>";
        return; // Stop the countdown once it's finished
    }

    // Calculate the time remaining in days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML elements with the remaining time
    document.getElementById('days-number').textContent = days;
    document.getElementById('hours-number').textContent = hours;
    document.getElementById('minutes-number').textContent = minutes;
    document.getElementById('seconds-number').textContent = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to set the countdown immediately
updateCountdown();
