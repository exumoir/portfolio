// 1. GESTION DU PRELOADER (SORTIE DE L'ÉCRAN NOIR)
function hidePreloader() {
    const loader = document.getElementById('preloader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            document.body.classList.remove('loading');
        }, 1000); 
    }
}

// Sécurité : Si le site met trop de temps (ex: connexion lente), on force l'affichage après 3s
setTimeout(hidePreloader, 3000);
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
window.addEventListener('load', reveal); // Lance l'anim au chargement pour les éléments déjà visibles

// 3. GESTION DU LIGHTBOX (CLIC SUR IMAGE)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.grid-item img').forEach(img => {
    // On réactive les clics qui étaient bloqués par pointer-events:none
    img.style.pointerEvents = 'auto'; 
    img.style.cursor = 'zoom-in';

    img.addEventListener('click', () => {
        if (lightbox && lightboxImg) {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        }
    });
});

// Fermer le lightbox en cliquant n'importe où
if (lightbox) {
    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}

// 4. PROTECTION IMAGES (CLIC DROIT)
document.addEventListener('contextmenu', e => e.preventDefault());
