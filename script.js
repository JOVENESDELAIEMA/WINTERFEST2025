// Cargar canciones desde JSON y crear acordeones
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
      });

      container.appendChild(btn);
      container.appendChild(panel);
    });
  })
  .catch(error => {
    console.error("Error al cargar canciones:", error);
    const container = document.getElementById('cancionContainer');
    container.innerHTML = '<p style="color:red;">No se pudieron cargar las canciones.</p>';
  });

// Nieve
let snowflakes = [];

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.textContent = '❄';
  snowflake.style.position = 'fixed';
  snowflake.style.top = Math.random() * -100 + 'px';
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.fontSize = 10 + Math.random() * 10 + 'px';
  snowflake.style.opacity = Math.random();
  snowflake.style.pointerEvents = 'none';
  snowflake.style.zIndex = '9999';
  document.body.appendChild(snowflake);

  snowflakes.push(snowflake);
}

function animateSnow() {
  snowflakes.forEach((flake, i) => {
    let top = parseFloat(flake.style.top);
    let left = parseFloat(flake.style.left);
    flake.style.top = (top + 2) + 'px';
    flake.style.left = (left + (Math.random() - 0.5)) + 'px';

    if (top > window.innerHeight) {
      flake.remove();
      snowflakes.splice(i, 1);
    }
  });

  requestAnimationFrame(animateSnow);
}

for (let i = 0; i < 50; i++) {
  createSnowflake();
}

animateSnow();
