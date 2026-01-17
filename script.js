// 1. Protection contre le vol d'images
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('dragstart', e => {
    if (e.target.nodeName === 'IMG') e.preventDefault();
});

// 2. Animation d'entrée (Preloader)
window.addEventListener('load', () => {
    const loader = document.getElementById('preloader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            document.body.classList.remove('loading');
        }, 2000);
    }
});

// 3. Animation au défilement (Reveal)
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

// 4. Gestion du Lightbox (Cliquer pour agrandir)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.grid-item img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
        if (lightbox && lightboxImg) {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        }
    });
});

if (lightbox) {
    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}
