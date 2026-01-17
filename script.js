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
// Gestion du Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-lightbox');

document.querySelectorAll('.grid-item img').forEach(image => {
    image.style.pointerEvents = "auto"; // On réactive le clic
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = image.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if(e.target !== lightboxImg) lightbox.style.display = 'none';
});
// Gestion de l'animation d'entrée
window.addEventListener('load', () => {
    const loader = document.getElementById('preloader');
    
    // On laisse l'animation se jouer au moins 2 secondes
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        document.body.classList.remove('loading');
    }, 2500);
});

// Ajouter la classe loading au début
document.body.classList.add('loading');
