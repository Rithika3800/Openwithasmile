// Reveal the gift message and trigger confetti
function revealGift() {
    const giftMessage = document.getElementById('gift-message');
    giftMessage.style.display = 'block';

    // Trigger confetti animation
    createConfetti();
}

// Confetti function
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        document.body.appendChild(confetti);
    }
}
// Set the timer for (0 seconds)
let timeLeft = 30;
const timerElement = document.getElementById('timer');
const containerElement = document.querySelector('.container');
const overlayElement = document.getElementById('overlay');

// Function to update the timer and handle content reveal
function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Format the time in mm:ss format
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // If the time runs out, reveal the content
    if (timeLeft === 0) {
        containerElement.style.display = 'block'; // Show content
        overlayElement.style.display = 'none';  // Hide overlay
    } else {
        timeLeft--;
        setTimeout(updateTimer, 1000); // Update every second
    }
}

// Start the timer when the page loads
window.onload = updateTimer;


