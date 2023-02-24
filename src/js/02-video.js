import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import storage from './storage';
const { save, load } = storage;

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on('timeupdate', throttle(correctPlayerTime, 1000));

function correctPlayerTime(evt) {
  const currentTimePlayer = save('videoplayer-current-time', evt.seconds);
}

const currentTime = load('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}
