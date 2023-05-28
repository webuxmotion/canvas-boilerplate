import { Howl } from 'howler';
import audioJump from '../audio/audioJump.mp3';
import audioDie from '../audio/audioDie.mp3';

const audio = {
  jump: new Howl({
    src: [audioJump],
    volume: 0.1
  }),
  die: new Howl({
    src: [audioDie],
    volume: 0.1
  }),
}

export default audio;