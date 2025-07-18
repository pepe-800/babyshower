openBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  content.classList.add('show');
  content.setAttribute('aria-hidden', 'false');

  audio.play()
    .then(() => {
      // Audio se está reproduciendo sin problema
      console.log("Audio iniciado");
    })
    .catch((error) => {
      // Aquí el navegador bloqueó el audio, intenta desbloquearlo con user interaction extra
      console.log("Error al reproducir audio:", error);
      alert("Para escuchar la música, por favor permite la reproducción o presiona el botón de reproducir en tu navegador.");
    });
});
