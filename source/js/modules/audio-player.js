const audioContainer = document.querySelector('.audio-player');
const audioButton = audioContainer.querySelector('.audio-player__button-play');

function onButtonPlayAudio() {
  if (!audioContainer) {
    return;
  }
  if (!audioButton) {
    audioContainer.dataset.isPlaying = 'is-out';
    return;
  }
  audioContainer.dataset.isPlaying = 'is-playing';
  const audioPlayer = document.createElement('iframe');
  audioPlayer.setAttribute('src', 'https://music.yandex.ru/iframe/#track/112912322/25474374');
  audioPlayer.setAttribute('width', '320');
  audioPlayer.setAttribute('heigth', '140');
  audioPlayer.innerHTML = 'Слушайте 001. Конец фронтенда, одинаковые фреймворки и логические свойства на Яндекс Музыке';
  audioContainer.append(audioPlayer);
}

audioButton.addEventListener('click', onButtonPlayAudio);
