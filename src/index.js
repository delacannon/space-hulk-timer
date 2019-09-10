import Phaser from "phaser";
import { BootScene, GameScene, TimerScene } from "./scenes";

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720
  },
  scene: [BootScene, GameScene, TimerScene]
};

const game = new Phaser.Game(config);
/*
function preload() {
  this.load.image("bg", logoImg);
  this.load.bitmapFont("font", font, fontData);
}

function create() {
  this.background_image = this.add.image(0, 0, "bg").setOrigin(0);
  this.seconds = 60;
  this.minutes = 2;
  this.text2 = this.add.bitmapText(290, 240, "font", "20:");
  this.text2.tint = 0x000000;
  this.text = this.add.bitmapText(280, 230, "font", "20:");
  this.timeOut = false;
  this.timedEvent = this.time.addEvent({
    delay: 1000,
    callback: onEvent,
    callbackScope: this,
    repeat: 59,
    loop: true
  });
}

function onEvent() {
  if (this.minutes === 0 && this.seconds == 0) {
    this.timeOut = true;
    return false;
  }

  if (this.seconds < 0) {
    this.seconds = 60;
    this.minutes--;
  } else {
    this.seconds--;
  }
}

function update() {
  if (!this.timeOut) {
    this.text.setText(
      `0${this.minutes}:${this.seconds < 10 ? "0" : ""}${this.seconds}`
    );
    this.text2.setText(
      `0${this.minutes}:${this.seconds < 10 ? "0" : ""}${this.seconds}`
    );
    if (this.seconds <= 30 && this.minutes === 0) {
      this.text.tint = 0xff0000;
    }
  } else {
    this.text.setText("00:00");
  }
}
*/
