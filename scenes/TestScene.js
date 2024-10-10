import Phaser from 'phaser';
import logo from '/assets/phaser3-logo.png';


export default class TestScene extends Phaser.Scene {
	constructor(){
		super({key: "testScene"});
	}
	
	preload(){
		this.load.image("logo", logo);
	}
	
	create(){
		this.testText = this.add.text(10, 10, "Upper Left", {fontSize: "32px", fontStyle: "bold"});
		this.logo = this.add.image(this.sys.game.scale.gameSize.width / 2, this.sys.game.scale.gameSize.height / 2, "logo");

	}

	update() {
		this.logo.rotation += 0.01;
	}

}
