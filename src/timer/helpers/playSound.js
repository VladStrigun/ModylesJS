import { Howl } from 'howler';
import timerAudio from '../../../audio/timer-bell_m1tycbno.mp3'

export function playSound() {
    var sound = new Howl({
        src: [timerAudio]
    });

    sound.play();
}
