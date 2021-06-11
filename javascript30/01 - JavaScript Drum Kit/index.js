// Solution varies from version prescribed by Wes Bos
function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) // handle null keys
      return;
    audio.currentTime = 0; // allow fast play
    audio.play();
    key.classList.add('playing');
  }

  function endSound (e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!key)
      return;
    key.classList.remove('playing');
  }

  window.addEventListener('keydown', playSound) ;
  window.addEventListener('keyup', endSound) ;