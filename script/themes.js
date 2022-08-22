//++ Hace el cambio del tema de la página de claro / oscuro ++

'use strict';

const insertHTML = document.querySelector('.icon');
const btnLight = document.createElement('span');
const btnDark = document.createElement('span');

btnLight.innerHTML = `<span class="material-symbols-sharp btn1">night_sight_auto</span>`;
btnDark.innerHTML = `<span class="material-symbols-sharp btn2">night_sight_auto_off</span>`;

insertHTML.appendChild(btnLight);
insertHTML.appendChild(btnDark);

btnDark.style.visibility = 'hidden';
document.body.style.background = '#f6fff8';
localStorage.setItem('theme', 'light');

const themeUsed = localStorage.getItem('theme');

btnLight.addEventListener('click', (e) => {
    btnLight.style.visibility = 'hidden';
    btnDark.style.visibility = 'visible';
    localStorage.setItem('theme', 'dark');
    document.body.style.background = '#1b263b';
});

btnDark.addEventListener('click', (e) => {
    btnLight.style.visibility = 'visible';
    btnDark.style.visibility = 'hidden';
    document.body.style.background = '#f6fff8';
    localStorage.setItem('theme', 'light');
});