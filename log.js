document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // NOTE: This is a client-side placeholder auth for demo only.
        // Grab username from the form (try id, name, then first text input)
        let usernameInput = form.querySelector('#username') || form.querySelector('[name="username"]') || form.querySelector('input[type="text"]');
        const username = (usernameInput && usernameInput.value) ? usernameInput.value.trim() : 'User';
        localStorage.setItem('cybershield_user', username);
        alert('You have successfully logged in — ' + username);
        form.reset();
        window.location = 'index.html';
    });
});