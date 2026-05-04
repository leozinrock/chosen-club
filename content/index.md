---
title: Chosen Club
tags: [hub, networking]
---

<div id="splash-overlay">
  <div class="splash-orb orb-1"></div>
  <div class="splash-orb orb-2"></div>
  <div class="splash-orb orb-3"></div>
  <div class="splash-line"></div>
  <div class="splash-content">
    <div class="splash-badge">✦ Networking Premium</div>
    <p class="splash-title-text">Chosen Club</p>
    <p class="splash-tagline">Conectando profissionais que criam,<br>constroem e transformam.</p>
    <button class="splash-enter-btn" id="splash-enter-btn">Entrar na rede →</button>
    <div class="splash-timer-track">
      <div class="splash-timer-fill" id="splash-timer-fill"></div>
    </div>
    <p class="splash-hint">Acesso automático em 4 segundos</p>
  </div>
</div>

<script>
(function () {
  var overlay = document.getElementById('splash-overlay');
  var btn = document.getElementById('splash-enter-btn');
  var fill = document.getElementById('splash-timer-fill');
  var DURATION = 4000;

  if (!overlay) return;

  // Não mostra de novo na mesma sessão
  if (sessionStorage.getItem('cc-splash-shown')) {
    overlay.style.display = 'none';
    return;
  }

  // Anima a barra de progresso
  if (fill) {
    fill.style.transition = 'width ' + DURATION + 'ms linear';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        fill.style.width = '100%';
      });
    });
  }

  function dismiss() {
    sessionStorage.setItem('cc-splash-shown', '1');
    overlay.classList.add('splash-exit');
    setTimeout(function () { overlay.style.display = 'none'; }, 700);
  }

  if (btn) btn.addEventListener('click', dismiss);
  setTimeout(dismiss, DURATION);
})();
</script>

<div class="hero-section">
  <div class="hero-badge">✦ Rede de Networking Premium</div>
  <h1 class="hero-title">Chosen Club</h1>
  <p class="hero-subtitle">Conectando profissionais que criam, constroem e transformam. Encontre colaboradores, parceiros e mentores da rede.</p>
  <div class="hero-stats">
    <div class="stat"><span class="stat-number">3</span><span class="stat-label">Membros</span></div>
    <div class="stat"><span class="stat-number">11</span><span class="stat-label">Habilidades</span></div>
    <div class="stat"><span class="stat-number">1</span><span class="stat-label">Projeto ativo</span></div>
  </div>
</div>

## 👥 Membros

| Nome | Área | Cidade | Skills |
|------|------|--------|--------|
| [[Ana Lima]] | Design | São Paulo | Figma, UX Research, Prototipagem |
| [[Beatriz Rocha]] | Marketing | Curitiba | Copywriting, SEO, Branding, Social Media |
| [[Carlos Mendes]] | Tecnologia | Curitiba | Python, Automação, APIs, IA |

---

## 🛠 Habilidades no grupo

### Design & Criação
[[Figma]] · [[UX Research]] · [[Prototipagem]]

### Tecnologia & Desenvolvimento
[[Python]] · [[Automação]] · [[APIs]] · [[IA]]

### Marketing & Comunicação
[[Copywriting]] · [[SEO]] · [[Branding]] · [[Social Media]]

---

## 🚀 Projetos

| Projeto | Status | Skills necessárias |
|---------|--------|--------------------|
| [[App de Produtividade para Times]] | Formando equipe | Figma, UX Research |

---

## 📅 Encontros recentes

- [[Encontro 2025-04-10]] — Ana Lima, Carlos Mendes, Beatriz Rocha

---

> **Como usar:** Clique em qualquer membro para ver o perfil completo. Use a busca (⌘K) para encontrar por skill ou nome. Explore o grafo para ver as conexões da rede.
