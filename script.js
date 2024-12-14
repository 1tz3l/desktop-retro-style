document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loginScreen = document.getElementById('loginScreen');
    const profileSection = document.getElementById('profileSection');
    const desktopScreen = document.getElementById('desktopScreen');

    loadingScreen.style.display = 'block';
    loginScreen.style.display = 'none';

    setTimeout(function() {
        loadingScreen.style.display = 'none';
        loginScreen.style.display = 'block';
    }, 2000); // 2000 milliseconds = 2 seconds

    profileSection.addEventListener('click', function() {
        loginScreen.style.display = 'none';
        desktopScreen.style.display = 'block';
    });
});

function openWindow(windowId) {
    document.getElementById(windowId).style.display = 'block';
}

function closeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
}