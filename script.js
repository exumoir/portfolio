// Protection contre le clic droit
document.addEventListener('contextmenu', e => e.preventDefault());

// Animation au défilement (Scroll Reveal)
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);
// Lancer une fois au chargement
window.onload = reveal;

// Effet de parallaxe léger sur le Hero
window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-content');
    let scrollValue = window.scrollY;
    heroContent.style.transform = `translateY(${scrollValue * 0.4}px)`;
    heroContent.style.opacity = 1 - (scrollValue / 700);
});
