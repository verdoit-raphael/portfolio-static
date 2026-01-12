// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const icon = themeToggle.querySelector('i');

// Check saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-bs-theme', savedTheme);
updateIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    if (theme === 'dark') {
        icon.classList.remove('bi-moon-stars-fill');
        icon.classList.add('bi-sun-fill');
        icon.classList.add('text-warning'); // Soleil jaune
    } else {
        icon.classList.remove('bi-sun-fill');
        icon.classList.remove('text-warning');
        icon.classList.add('bi-moon-stars-fill');
    }
}

// Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Merci ! Ceci est une démonstration, le formulaire n\'est pas connecté à un serveur.');
    e.target.reset();
});

// Close mobile navbar on click
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        if(menuToggle.classList.contains('show')) {
            bsCollapse.toggle();
        }
    });
});