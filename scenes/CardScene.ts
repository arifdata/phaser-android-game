import {Scene} from 'phaser';
import card from '/assets/card-4.png';


export default class CardScene extends Scene {
  testText: Phaser.GameObjects.Text;
	constructor(){
		super({key: "CardScene"});
	}
	
	preload(){
		this.load.image('card', card);
	}
	
	create(){
		const testText = this.add.text(10, 10, "CardScene Shine Effect", {fontSize: "32px", fontStyle: "bold"});
        const card = this.add.plane(this.sys.scale.width / 2, this.sys.scale.height / 2, 'card');
        card.setScale(2);
        
        const fx = card.postFX.addShine(1, .2, 5);
        
        this.add.tween({
            targets: card,
            duration: 4000,
            repeatDelay: 800,
            rotateY: 360,
            repeat: -1
        });
        
        this.input.once("pointerdown", () => {
            this.scene.start("EaseScene");
        }, this);


	}

	update() {
		
	}

}
