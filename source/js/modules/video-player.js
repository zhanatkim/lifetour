const videoContainer = document.querySelector('.video');
const placeholder = videoContainer.querySelector('img');

function onCoverPlay() {
  if (!videoContainer) {
    videoContainer.dataset.isPlaying = 'is-out';
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
  placeholder.remove();
}

export const videoPlay = () => {
  videoContainer.addEventListener('click', onCoverPlay);
};
