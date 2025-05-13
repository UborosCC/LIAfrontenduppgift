const loginBtn = document.getElementById('login-btn');
const loginForm = document.querySelector('.login-form');
const nameInput = document.getElementById('name-input');
const loginPopup = document.getElementById('login');
const loginMessage = document.getElementById('login-message');
const loginClose = document.getElementById('form-close');
const navClose = document.getElementById('nav-close');
const lastLoggedUser = localStorage.getItem('lastUser');

function showLogInMessage(name, welcomeBack = false) {
    loginMessage.textContent = welcomeBack ? `Välkommen tillbaka! Du är inloggad som ${name}` : `Du är inloggad som ${name}`;
}

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    if (name) {
        const welcomeBack = (lastLoggedUser === name);
        showLogInMessage(name, welcomeBack);
        localStorage.setItem('lastUser', name);
        loginBtn.textContent = "LOGGA UT";
        loginPopup.style.display = 'none';
        document.body.classList.remove('popup-activate');
    }
});

loginBtn.addEventListener('click', function() {
    if (loginBtn.textContent === 'LOGGA UT') {
        loginBtn.textContent = 'LOGGA IN';
        loginMessage.textContent = '';
        nameInput.value = '';
    } else {
        loginPopup.style.display = 'block';
        document.body.classList.add('popup-activate');
    }
});

loginClose.addEventListener('click', function() {
    loginPopup.style.display = 'none';
    document.body.classList.remove('popup-activate');
});

navClose.addEventListener('click', function() {
    const navLinks = document.querySelectorAll('.nav-content');
    const navLogin = document.querySelector('.nav-right');

    const isVisible = window.getComputedStyle(navLinks[0]).display !== 'none';

    navLinks.forEach(link => {
        link.style.display = isVisible ? 'none' : 'block';
    });

    navLogin.style.display = isVisible ? 'none' : 'flex';

    navClose.textContent = isVisible ? 'Visa Meny' : 'Stäng Meny';
});