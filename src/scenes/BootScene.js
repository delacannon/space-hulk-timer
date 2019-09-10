import { Scene } from "phaser";
import logoImg from "../assets/deadangels.png";
import title from "../assets/spacehulk-title.png";
import font from "../assets/hulkfont.png";
import fontData from "../assets/hulkfont.xml";
import digitalfont from "../assets/digital.png";
import digitalfontData from "../assets/digital.xml";
import timer from "../assets/timer.png";
import audio from "../assets/audio.png";
import fade from "../assets/fade.png";
import ambientspaceMP3 from "../assets/ambientspace.mp3";
import ambientspaceOGG from "../assets/ambientspace.ogg";

class BootScene extends Scene {
	constructor(config) {
		super({ key: "BootScene" });
	}

	preload() {
		this.load.audio("ambient", [ambientspaceOGG, ambientspaceMP3]);
		this.load.image("bg", logoImg);
		this.load.image("audio", audio);
		this.load.image("timer", timer);
		this.load.image("title", title);
		this.load.image("fade", fade);
		this.load.bitmapFont("font", font, fontData);
		this.load.bitmapFont("digital", digitalfont, digitalfontData);
	}

	create() {
		this.scene.start("GameScene");
	}
}

export default BootScene;
