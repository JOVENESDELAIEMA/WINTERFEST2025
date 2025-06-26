// Crear acordeones dinámicamente desde JSON
fetch('canciones_completo.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('cancionContainer');
    data.forEach(cancion => {
      const btn = document.createElement('button');
      btn.className = 'accordion';
      btn.textContent = `• ${cancion.titulo}`;
      const panel = document.createElement('div');
      panel.className = 'accordion-panel';
      panel.textContent = cancion.letra;
      btn.addEventListener('click', () => {
        btn.classList.toggle('accordion-active');
        panel.classList.toggle('show');
        toggleSnow(false); // detener nieve al abrir
      });
      container.appendChild(btn);
      container.appendChild(panel);
    });
  });

// Nieve
let snowflakes = [];
let snowActive = true;

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.textContent = '❄';
  snowflake.className = 'snowflake';
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = 5 + Math.random() * 5 + 's';
  snowflake.style.fontSize = 10 + Math.random() * 10 + 'px';
  document.body.appendChild(snowflake);
  snowflakes.push(snowflake);
}

function startSnow() {
  for (let i = 0; i < 50; i++) {
    createSnowflake();
  }
  snowActive = true;
}

function stopSnow() {
  snowflakes.forEach(snowflake => snowflake.remove());
  snowflakes = [];
  snowActive = false;
}

function toggleSnow(forceState) {
  if (forceState === false || (snowActive && forceState !== true)) {
    stopSnow();
  } else {
    startSnow();
  }
}

document.getElementById('logoToggle').addEventListener('click', () => {
  toggleSnow();
});

startSnow();
