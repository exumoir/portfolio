// Animation au défilement
window.addEventListener('scroll', () => {
    const fadeElements = document.querySelectorAll('.grid-item');
    fadeElements.forEach(el => {
        const speed = 0.5;
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

// Initialisation des styles pour l'animation
document.querySelectorAll('.grid-item').forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = "all 0.8s ease-out";

    /* --- RESPONSIVE DESIGN (TÉLÉPHONES) --- */
@media (max-width: 768px) {
    /* Ajustement du Header */
    .hero h1 {
        font-size: 2.2rem; /* Titre plus petit sur mobile */
        padding: 0 10px;
    }

    /* Ajustement de la section À Propos */
    .about-container {
        flex-direction: column; /* On empile la photo et le texte */
        text-align: center;
        gap: 30px;
    }

    .about-text {
        text-align: center;
        padding: 0 10px;
    }

    .about-image img {
        max-width: 80%; /* La photo prend plus de place sur mobile */
    }

    /* Menu mobile simplifié */
    .nav-links {
        gap: 10px;
    }
    
    .nav-links a {
        font-size: 0.7rem;
    }

    /* Grille de photos : 1 seule colonne propre */
    .grid-container {
        grid-template-columns: 1fr;
        grid-auto-rows: 500px; /* Hauteur des photos sur mobile */
    }
}
/* Empêche la sélection bleue du texte et des images */
body {
    -webkit-user-select: none;  /* Safari */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none;          /* Standard */
}

/* Désactive spécifiquement l'enregistrement via appui long sur mobile */
img {
    pointer-events: none;       /* Rend l'image "intouchable" */
    -webkit-touch-callout: none; /* Désactive le menu contextuel iOS */
}
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

let currentIndex = 0;

const updateCarousel = (index) => {
    track.style.transform = `translateX(-${index * 100}%)`;
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
};

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateCarousel(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateCarousel(currentIndex);
});

// Navigation par les points
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(currentIndex);
    });
});

// Optionnel : Défilement automatique toutes les 5 secondes
setInterval(() => {
    nextButton.click();
}, 5000);
});
window.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.reveal, .grid-item');
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
});
