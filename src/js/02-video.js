import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on('timeupdate', throttle(correctPlayerTime, 1000));

function correctPlayerTime(evt) {
  const currentTimePlayer = localStorage.setItem(
    'videoplayer-current-time',
    evt.seconds
  );
}

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}
