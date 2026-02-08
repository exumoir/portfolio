/**
 * 1. GESTION DU PRELOADER & INITIALISATION
 */
const hidePreloader = () => {
    const loader = document.getElementById('preloader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            document.body.classList.remove('loading');
            // On lance les animations après la disparition du loader
            initAnimations();
        }, 800); 
    }
};

window.addEventListener('load', hidePreloader);
setTimeout(hidePreloader, 3500); // Sécurité

/**
 * 2. MENU MOBILE & NAVIGATION ACTIVE
 */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Animation de l'icône menu
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky header au scroll
    document.querySelector('.header').classList.toggle('sticky', window.scrollY > 100);

    // Fermeture auto du menu mobile au clic/scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/**
 * 3. EFFET DE TEXTE DYNAMIQUE (TYPED.JS)
 */
const initAnimations = () => {
    if (document.querySelector('.multiple-text')) {
        new Typed('.multiple-text', {
            strings: ['Développeur Full Stack', 'Designer UI/UX', 'Passionné de Tech'],
            typeSpeed: 70,
            backSpeed: 50,
            backDelay: 1500,
            loop: true
        });
    }

    /**
     * 4. SCROLL REVEAL (Apparition fluide des éléments)
     */
    const sr = ScrollReveal({
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: false // Ne se rejoue pas à chaque fois pour la performance
    });

    sr.reveal('.home-content, .heading', { origin: 'top' });
    sr.reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
    sr.reveal('.home-content h1, .about-img', { origin: 'left' });
    sr.reveal('.home-content p, .about-content', { origin: 'right' });
};

/**
 * 5. GESTION DU LIGHTBOX AMÉLIORÉ
 */
const setupLightbox = () => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    document.querySelectorAll('.portfolio-box img, .grid-item
