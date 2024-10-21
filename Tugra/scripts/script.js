// JavaScript to play sound on hover
const infoBoxes = document.querySelectorAll('.info-box');
const hoverSound = document.getElementById('hover-sound');

infoBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0; // Reset the audio to the beginning
        hoverSound.play(); // Play the sound
    });
});

// Function to update time in the footer
function updateTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('time').textContent = now.toLocaleTimeString(undefined, options);
}

// Call updateTime every second
setInterval(updateTime, 1000);
updateTime(); // Initial call to set the time immediately
