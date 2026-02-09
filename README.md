# ⚡ CORE.IX // SYSTEM OVERDRIVE
> **STATUS:** [SYSTEM_ACTIVE]  
> **NODE:** EXUM_01  
> **CLEARANCE:** LEVEL_ALPHA

<p align="center">
  <img src="https://capsule-render.vercel.app/render?type=glitch&text=CORE.IX&color=00f2ff&fontSize=100&height=200" alt="Core.IX Title" />
</p>

## 🌐 [INTERFACE_LIVE]
[EXPLORE THE DIMENSION](https://exumoir.github.io/portfolio/)

---

### 📡 ANALYSE DES SYSTÈMES
Ce dépôt contient le code source du **Moteur de Réalité Digitale Core.IX**. Contrairement aux architectures web conventionnelles, ce système fusionne le DOM et le GPU pour une immersion totale.

| MODULE | TECH | STATUS |
| :--- | :--- | :--- |
| **Render Engine** | `Three.js` + `WebGL` | **OPTIMIZED** |
| **Kinetic Motion** | `GSAP` (Expo Easing) | **CALIBRATED** |
| **Audio Core** | `Web Audio API` (Oscillator) | **STABLE** |
| **Post-FX** | `UnrealBloom` + `GlitchShader` | **OPERATIONAL** |

---

### 🛠️ PROTOCOLES TECHNIQUES
Le système utilise des **Shaders GLSL** personnalisés pour manipuler les pixels en temps réel. L'optimisation mobile est gérée par une détection dynamique d'instances.

```glsl
// Core Glitch Protocol
if (amount > 0.0) {
    uv.x += sin(uv.y * 10.0 + time) * amount * 0.05;
    uv.y += cos(uv.x * 10.0 + time) * amount * 0.02;
}
