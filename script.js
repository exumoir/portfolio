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
});
