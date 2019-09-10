import { Scene } from "phaser";

class GameScene extends Scene {
	constructor(config) {
		super({ key: "GameScene" });
	}

	preload() {}

	create() {
		this.bg = this.add.image(0, 0, "bg").setOrigin(0);

		this.title = this.add.image(1200 / 2, -200, "title").setOrigin(0.5);

		this.audio = this.add
			.image(2000, 405, "audio")
			.setOrigin(0.5)
			.setInteractive();
		this.timer = this.add
			.image(-500, 405, "timer")
			.setOrigin(0.5)
			.setInteractive();

		this.input.on("gameobjectover", (pointer, gameObject) => {
			gameObject.setTint(0xff0000);
			this.tweens.add({
				targets: gameObject,
				scale: 1.05,
				duration: 300,
				ease: "Power2"
			});
		});
		this.input.on("gameobjectout", (pointer, gameObject) => {
			gameObject.clearTint();
			this.tweens.add({
				targets: gameObject,
				scale: 1,
				duration: 300,
				ease: "Power2"
			});
		});

		this.timer.on("pointerdown", () => {
			this.scene.start("TimerScene");
		});

		var tween = this.tweens.add({
			targets: this.title,
			y: 90,
			duration: 600,
			ease: "Power2"
		});

		var tween1 = this.tweens.add({
			delay: 400,
			targets: this.audio,
			x: 850,
			duration: 600,
			ease: "Power2"
		});

		var tween2 = this.tweens.add({
			delay: 400,
			targets: this.timer,
			x: 350,
			duration: 600,
			ease: "Power2"
		});
	}
}

export default GameScene;
