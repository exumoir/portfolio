
// 1. GESTION DU PRELOADER (SORTIE DE L'ÉCRAN NOIR)
function hidePreloader() {
    const loader = document.getElementById('preloader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            document.body.classList.remove('loading');
        }, 1000); // Temps pour la transition de disparition
    }
}

// Sécurité : Si le site met trop de temps, on force l'affichage après 3s
setTimeout(hidePreloader, 3000);

// Quand tout est chargé (images, etc.), on enlève le loader
window.addEventListener('load', hidePreloader);

// 2. ANIMATION AU SCROLL (REVEAL)
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal, .grid-item');
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

// 3. PROTECTION IMAGES
document.addEventListener('contextmenu', e => e.preventDefault());
