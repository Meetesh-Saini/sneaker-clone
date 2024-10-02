const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const dropdown = document.getElementById('dropdown');
const overlay = document.getElementById('overlay');


menuToggle.addEventListener('click', () => {
    dropdown.classList.remove('slide-out');
    dropdown.classList.add('slide-in');
    dropdown.style.transform = 'translateX(0)';
    overlay.classList.remove('hidden');
});

menuClose.addEventListener('click', () => {
    dropdown.classList.remove('slide-in');
    dropdown.classList.add('slide-out');
    dropdown.style.transform = 'translateX(-100%)';
    overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
    dropdown.classList.remove('slide-in');
    dropdown.classList.add('slide-out');
    dropdown.style.transform = 'translateX(-100%)';
    overlay.classList.add('hidden');
});
