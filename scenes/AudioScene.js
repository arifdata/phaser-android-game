import Phaser from 'phaser';
import music from '/assets/oedipus_wizball_highscore.ogg';


export default class AudioScene extends Phaser.Scene {
	constructor(){
		super({key: "AudioScene"});
	}
	
	preload(){
    this.load.audio('theme', [
      music,
    ]);

	}
	
	create(){
    const music = this.sound.add('theme');
		const testText = this.add.text(10, 10, "Audio Scene. Should be hearing music play in the bg.", {fontSize: "32px", fontStyle: "bold"});
    const card = this.add.plane(this.sys.scale.width / 2, this.sys.scale.height / 2, 'card');
    card.setScale(2);
       
    this.add.tween({
        targets: card,
        duration: 4000,
        repeatDelay: 800,
        rotateY: 360,
        repeat: -1
    });
        
    this.input.once("pointerdown", () => {
        this.scene.start("TweenScene");
        music.stop();
    }, this);

    music.play();


	}

	update() {
		
	}

}
