import {Scene} from 'phaser';
import logo from "/assets/phaser3-logo.png";

export default class TestScene extends Scene {
  logo : Phaser.GameObjects.Image;
  testText: Phaser.GameObjects.Text;

	constructor(){
		super({key: "TestScene"});
	}
	
	preload(){
		this.load.image("logo", logo);
	}
	
	create(){
		this.testText = this.add.text(10, 10, "Upper Left", {fontSize: "32px", fontStyle: "bold"});
		this.logo = this.add.image(this.sys.game.scale.gameSize.width / 2, this.sys.game.scale.gameSize.height / 2, "logo");

        this.input.once("pointerdown", () => {
            this.scene.start("ParticleScene");
        }, this);

	}

	update() {
		this.logo.rotation += 0.01;
	}

}
