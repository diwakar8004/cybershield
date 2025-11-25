document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (!form) return;
    const setPass = document.getElementById('setPass');
    const cnfPass = document.getElementById('cnfPass');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (setPass && cnfPass) {
            if (setPass.value !== cnfPass.value) {
                alert('Passwords do not match. Please confirm your password.');
                return;
            }
        }
        // Create a demo 'account' in localStorage and auto-login
        const firstName = document.getElementById('firstName') ? document.getElementById('firstName').value.trim() : '';
        const username = firstName || 'NewUser';
        localStorage.setItem('cybershield_user', username);
        alert('Account created. Logged in as ' + username);
        form.reset();
        window.location = 'index.html';
    });
});