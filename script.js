document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loginScreen = document.getElementById('loginScreen');

    loadingScreen.style.display = 'block';
    loginScreen.style.display = 'none';

    setTimeout(function() {
        loadingScreen.style.display = 'none';
        loginScreen.style.display = 'block';
    }, 2000); // 2000 milliseconds = 2 seconds
});
