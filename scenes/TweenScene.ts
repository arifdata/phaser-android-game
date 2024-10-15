import {Scene} from 'phaser';
import block from '/assets/50x50.png';


export default class TweenScene extends Scene {
  testText: Phaser.GameObjects.Text;

	constructor(){
		super({key: "TweenScene"});
	}
	
	preload(){
    this.load.image('block', block);
	}
	
	create(){
		    const testText = this.add.text(10, 10, "TweenScene.", {fontSize: "32px", fontStyle: "bold"});
        const blocks = this.add.group({ key: 'block', repeat: 107, setScale: { x: 0.3, y: 0.3 } });

        Phaser.Actions.GridAlign(blocks.getChildren(), {
            width: 12,
            height: 9,
            cellWidth: 60,
            cellHeight: 60,
            x: 40,
            y: 30
        });

        let i = 0;

        blocks.children.iterate(child => {

            this.tweens.add({
                targets: child,
                scale: 1,
                ease: 'sine.inout',
                duration: 300,
                delay: i * 50,
                repeat: -1,
                yoyo: true,
                repeatDelay: 500
            });

            i++;

            if (i % 12 === 0)
            {
                i = 0;
            }

       });

    this.input.once("pointerdown", () => {
        this.scene.start("TestScene");
    }, this);

	}

}
