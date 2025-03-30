// script.js

const animateButton = document.getElementById('animateButton');
const animatedImage = document.getElementById('animatedImage');
const usernameInput = document.getElementById('username');
const savePreferencesButton = document.getElementById('savePreferences');

// Animation Trigger on Button Click
animateButton.addEventListener('click', () => {
    animatedImage.classList.toggle('rotate');
});

// Local Storage Functions
function saveUserPreferences(username) {
    localStorage.setItem('username', username);
}

function getUserPreferences() {
    return localStorage.getItem('username');
}

// Load Preferences on Page Load
window.addEventListener('load', () => {
    const username = getUserPreferences();
    if (username) {
        usernameInput.value = username;
    }
});

// Save Preferences on Button Click
savePreferencesButton.addEventListener('click', () => {
    const username = usernameInput.value;
    saveUserPreferences(username);
    alert('Preferences saved!');
});