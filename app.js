(function () {
  'use strict;';

  function removePlayingState(event) {
    event.target.classList.remove('playing');
  }

  function playSound(event) {
    const keyCode = event.code;
    const audio = document.querySelector(`audio[data-key='${keyCode}']`);

    if (!audio) return;

    const key = document.querySelector(`div[data-key='${keyCode}']`);
    key.classList.add('playing');

    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removePlayingState));

  window.addEventListener('keydown', playSound);
}());