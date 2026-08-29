const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('mainNav');

toggle.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('#mainNav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();
