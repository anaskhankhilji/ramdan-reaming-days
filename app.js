
const targetDate = new Date('March 1, 2025 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = "<h2>Ramadan has arrived!</h2>";
        return; // Stop the countdown once it's finished
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days-number').textContent = days;
    document.getElementById('hours-number').textContent = hours;
    document.getElementById('minutes-number').textContent = minutes;
    document.getElementById('seconds-number').textContent = seconds;
}

setInterval(updateCountdown, 1000);

updateCountdown();
