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
});