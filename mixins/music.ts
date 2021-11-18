import { Vue, Component } from 'vue-property-decorator';

@Component({})

export class MusicMixin extends Vue {
  protected _data: any
  Wavesurfer: any
  wavesurfer: any
  muted: boolean = true
  currentTrack: number = 0
  isPlay: boolean = true
  isReplay: boolean = true
  myList: String[] = [
      '../KawakiWoAmeku-Minami-5862585.mp3',
      '../KaikaiKitan-Eve.mp3',
      '../IroKousuiHorimiyaOpening-YohKamiyama-7026438.mp3',
      '../CryBabyTokyoRevengersOpening-OfficialHigeDandism-7014853.mp3',
      '../Lost In Paradise (Jujutsu Kaisen Ending) - ALI, AKLO.mp3'
  ]
  // data() {
  //     return {
  //         totalTime: 0,
  //         currentTime: 0,
  //         isloading: true
  //     }
  // }
  // mounted() {
  //     if (process.browser) {
  //         this.Wavesurfer = require('wavesurfer.js');
  //     }
  //     this.createWavesuffer()
  //     this.loadNextSong()
  // }
  createWave() {
    if (process.browser) {
      this.Wavesurfer = require('wavesurfer.js');
    }
    this.createWavesuffer()
    this.loadNextSong()
  }
  createWavesuffer() {
      this.wavesurfer = this.Wavesurfer.create({
          container: '#hoang',
          waveColor: "#eee",
          progressColor: "#4cb6cb",
          cursorColor: "#4cb6cb",
          cursorWidth: 0,
          barWidth: 3,
          barRadius: 3,
          normalize: true,
          partialRender: true,
          responsive: true,
          hideCursor: true
      });
  }

  play() {
      this.wavesurfer.playPause()
      this.isPlay = !this.isPlay
  }
  rePlay() {
      const wave = this.wavesurfer
      wave.on('finish', () => {
          wave.play([0])
      });
  }

  pre_skip() {
      this.wavesurfer.skipBackward(5)
  }

  next_skip() {
      this.wavesurfer.skipForward(5)
  }

  mute() {
      this.wavesurfer.setMute(this.muted)
      this.muted = !this.muted;
  }

  loadNextSong() {
      this.wavesurfer.destroy()
      this.createWavesuffer()

      const currentSong = this.currentTrack
      const that = this
      this.wavesurfer.load(this.myList[currentSong]);
      this.wavesurfer.on('finish', () => {
          if (that.isReplay) {
              wave.play([0])
          } else {
              this.loadNextSong();
          }
      });

      const wave = this.wavesurfer

      // wave.on('loading', function (x) {
      //     console.log(x);
      // });
      wave.on('ready', function () {
          wave.play();
          console.log('aaa')
      });
      this._data.isloading = false
      wave.on('error', function (e: any) {
          console.warn(e);
      });

      wave.on('audioprocess', function () {
          if (wave.isPlaying()) {
              that._data.totalTime = Math.round(wave.getDuration())
              that._data.currentTime = Math.round(wave.getCurrentTime())
          }
      });

      this.currentTrack++
  }
}
