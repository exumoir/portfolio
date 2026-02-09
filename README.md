# 🌌 CORE.IX // L'Expérience Portfolio Next-Gen

![Version](https://img.shields.io/badge/Version-2.0.0-00f2ff?style=for-the-badge)
![Three.js](https://img.shields.io/badge/Powered_by-Three.js-black?style=for-the-badge&logo=three.dot-js)
![Bootstrap](https://img.shields.io/badge/UI_Framework-Bootstrap_5-7952b3?style=for-the-badge&logo=bootstrap)

**CORE.IX** est une interface immersive conçue pour briser la frontière entre le web traditionnel et les interfaces de science-fiction (FUI). Ce projet fusionne le **design génératif**, le **glassmorphism** et une architecture de code ultra-légère pour un rendu visuel impactant.

---

## 🛠️ Stack Technologique

| Composant | Technologie | Rôle |
| :--- | :--- | :--- |
| **Engine 3D** | Three.js (WebGL) | Rendu de la géométrie Toroïdale dynamique en background. |
| **Structure** | HTML5 / Bootstrap 5 | Grille responsive et squelette sémantique. |
| **Design** | CSS3 (Custom Props) | Flou de mouvement, néons et profondeur Z. |
| **Interactions** | Vanilla JavaScript | Curseur magnétique, terminal de commande et Reveal API. |

---

## ✨ Fonctionnalités "Elite"

### 1. Fond Génératif 3D
Utilisation d'un moteur WebGL pour animer un tore en mode *wireframe*. L'animation est optimisée pour une fluidité à 60fps tout en offrant une profondeur visuelle infinie.

### 2. Système de Curseur Magnétique
Le pointeur standard est remplacé par une entité dynamique en mode `mix-blend-mode: difference`. Il réagit en temps réel aux survols des éléments interactifs pour une immersion totale.

### 3. Terminal de Communication (Contact)
Un formulaire transformé en console système. 
* **Effet Typewriter** : Simulation d'injection de données au chargement de la section.
* **Laser Scan** : Bordures réactives et champs de saisie style "data-entry".

### 4. Architecture "Scroll-Reveal"
Implémentation d'un `IntersectionObserver` personnalisé. Les éléments ne sont injectés visuellement que lorsqu'ils entrent dans le champ de vision, boostant les performances (Core Web Vitals).

---

## 🚀 Installation

Envie de déployer ton propre laboratoire ? 

1. **Cloner le projet**
   ```bash
   git clone [https://github.com/votre-utilisateur/core-ix.git](https://github.com/votre-utilisateur/core-ix.git)
