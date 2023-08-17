export const setEventListener = () => {
  const audioContainer = document.querySelector('.audio-player');
  const audioButton = audioContainer.querySelector('.audio-player__button-play');
  const videoContainer = document.querySelector('.video');

  if (!audioContainer) {
    return;
  } else if (!videoContainer) {
    return;
  }
  videoContainer.addEventListener('click', onCoverPlayVideo);
  audioButton.addEventListener('click', onButtonPlayAudio);

  function onButtonPlayAudio() {
    if (!audioButton) {
      return;
    }
    audioContainer.dataset.isPlaying = 'is-playing';
    const audioPlayer = document.createElement('iframe');
    audioPlayer.setAttribute('src', 'https://music.yandex.ru/iframe/#track/112912322/25474374');
    audioPlayer.setAttribute('width', '340');
    audioPlayer.setAttribute('heigth', '220');
    audioPlayer.setAttribute('allow', 'autoplay');
    audioPlayer.innerHTML = 'Слушайте 001. Конец фронтенда, одинаковые фреймворки и логические свойства на Яндекс Музыке';
    audioContainer.append(audioPlayer);
    audioButton.removeEventListener('click', onButtonPlayAudio);
  }

  function onCoverPlayVideo() {
    if (videoContainer.querySelector('iframe')) {
      return;
    }
    videoContainer.dataset.isPlaying = 'is-playing';
    const videoPlayer = document.createElement('iframe');
    videoPlayer.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
    videoPlayer.setAttribute('title', 'YouTube video player');
    videoPlayer.setAttribute('allow', 'autoplay');
    videoPlayer.setAttribute('allowfullscreen', 'true');
    videoPlayer.setAttribute('width', '482');
    videoPlayer.setAttribute('heigth', '317');
    videoContainer.append(videoPlayer);
    videoContainer.removeEventListener('click', onCoverPlayVideo);
  }
};
