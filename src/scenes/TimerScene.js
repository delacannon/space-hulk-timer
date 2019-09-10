import { Scene } from "phaser";

class TimerScene extends Scene {
	constructor(config) {
		super({ key: "TimerScene" });
	}

	preload() {}

	create() {
		this.bg = this.add.image(0, 0, "bg").setOrigin(0);
		this.title = this.add.image(1200 / 2, 90, "title").setOrigin(0.5);
		this.fade = this.add
			.image(0, 0, "fade")
			.setOrigin(0)
			.setAlpha(0);

		var tween = this.tweens.add({
			delay: 100,
			targets: this.fade,
			alpha: 0.25,
			duration: 1000,
			ease: "Power2"
		});

		this.tweens.add({
			delay: 100,
			targets: this.title,
			y: -200,
			duration: 1000,
			ease: "Power2"
		});

		this.seconds = 60;
		this.minutes = 2;
		this.text2 = this.add
			.bitmapText(1200 / 2, 390, "digital", "20:", 260)
			.setAlpha(0)
			.setOrigin(0.5);
		this.text = this.add
			.bitmapText(1200 / 2, 390, "digital", "20:", 260)
			.setAlpha(0)
			.setOrigin(0.5);
		this.timeOut = false;
		this.timedEvent = this.time.addEvent({
			delay: 1000,
			callback: this.onEvent,
			callbackScope: this,
			repeat: 59,
			loop: true
		});

		this.tweens.add({
			delay: 0,
			targets: this.text,
			alpha: 1,
			duration: 1000,
			ease: "Power2"
		});

		this.tweens.add({
			delay: 0,
			targets: this.text2,
			alpha: 0.1,
			duration: 1000,
			ease: "Power2"
		});

		this.ambient = this.sound.add("ambient", { volume: 0.1, loop: true });
		this.tweens.add({
			targets: this.ambient,
			volume: 0.8,
			duration: 1000
		});
		this.ambient.play({ volume: 0.1 });

		var graphics = this.add.graphics();
		graphics.lineStyle(4, 0xff0000);
		graphics.moveTo(0, 300);
		graphics.lineTo(1200, 300);
	}

	onEvent() {
		if (this.minutes === 0 && this.seconds == 0) {
			this.timeOut = true;
			return false;
		}

		if (this.seconds <= 15 && this.minutes === 0) {
			//	this.text.tint = 0xff0000;
		}

		if (this.seconds <= 0) {
			this.seconds = 60;
			this.minutes--;
		} else {
			this.seconds--;
		}
	}

	update() {
		if (!this.timeOut) {
			this.text.setText(
				`0${this.minutes}:${this.seconds < 10 ? "0" : ""}${
					this.seconds
				}`
			);
			this.text2.setText("00:00");
			if (this.seconds <= 60 && this.minutes === 0) {
				this.text.tint = 0xff0000;
			}
		} else {
			this.text.setText("00:00");
		}
	}
}

export default TimerScene;
