document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (!toggle || !navLinks) return;

    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('show');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu when clicking outside nav (but allow clicks inside header/nav)
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.nav') && !e.target.closest('.nav-toggle')) {
            navLinks.classList.remove('show');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close with Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            navLinks.classList.remove('show');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Account area: show login/register or user + logout
    const accountArea = document.getElementById('account-area');
    function renderAccountArea() {
        if (!accountArea) return;
        const user = localStorage.getItem('cybershield_user');
        if (user) {
            // show username and logout
            accountArea.innerHTML = '';
            const span = document.createElement('span');
            span.className = 'account-btn';
            span.textContent = `Hi, ${user}`;
            const logout = document.createElement('button');
            logout.className = 'logout-btn';
            logout.textContent = 'Logout';
            logout.addEventListener('click', function () {
                localStorage.removeItem('cybershield_user');
                renderAccountArea();
            });
            accountArea.appendChild(span);
            accountArea.appendChild(logout);
        } else {
            accountArea.innerHTML = '';
            const loginLink = document.createElement('a');
            loginLink.href = 'login.html';
            loginLink.className = 'btn small outline';
            loginLink.textContent = 'Login';
            const regLink = document.createElement('a');
            regLink.href = 'register.html';
            regLink.className = 'btn small primary';
            regLink.textContent = 'Register';
            accountArea.appendChild(loginLink);
            accountArea.appendChild(regLink);
        }
    }

    renderAccountArea();
});
