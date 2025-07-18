const modal = document.getElementById('welcomeModal');
const openBtn = document.getElementById('openInvitationBtn');
const content = document.getElementById('invitationContent');
const audio = document.getElementById('bgAudio');

openBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  content.classList.add('show');
  content.setAttribute('aria-hidden', 'false');

  audio.play()
    .then(() => {
      console.log("Audio iniciado");
    })
    .catch(() => {
      audio.style.display = 'block'; // Muestra controles para que el usuario reproduzca manualmente si falla autoplay
    });
});
