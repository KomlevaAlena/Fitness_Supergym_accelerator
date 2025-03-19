const initVideo = () => {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  const player = document.querySelector('.gym__video-player');
  const link = document.querySelector('.gym__video-button');

  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    player.classList.add('is-show');
    new YT.Player(player, {
      videoId: '9TZXsZItgdw',
      events: {
        onReady: (e) => e.target.playVideo()
      }
    });

    evt.stopPropagation();
  });
};

export {initVideo};
