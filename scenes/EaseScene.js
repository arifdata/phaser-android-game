import Phaser from 'phaser';
import bluebar from '/assets/bluebar.png';


export default class EaseScene extends Phaser.Scene {
	constructor(){
		super({key: "EaseScene"});
	}
	
	preload(){
		this.load.image('bar', bluebar);
	}
	
	create(){
		    this.testText = this.add.text(10, 10, "Easing", {fontSize: "32px", fontStyle: "bold"});
        var eases = [
            'Linear',
            'Quad.easeIn',
            'Cubic.easeIn',
            'Quart.easeIn',
            'Quint.easeIn',
            'Sine.easeIn',
            'Expo.easeIn',
            'Circ.easeIn',
            'Back.easeIn',
            'Bounce.easeIn',
            'Quad.easeOut',
            'Cubic.easeOut',
            'Quart.easeOut',
            'Quint.easeOut',
            'Sine.easeOut',
            'Expo.easeOut',
            'Circ.easeOut',
            'Back.easeOut',
            'Bounce.easeOut',
            'Quad.easeInOut',
            'Cubic.easeInOut',
            'Quart.easeInOut',
            'Quint.easeInOut',
            'Sine.easeInOut',
            'Expo.easeInOut',
            'Circ.easeInOut',
            'Back.easeInOut',
            'Bounce.easeInOut'
        ];

        const stepY = 19

        // labels
        for (const [index, easeFnName] of eases.entries()) {
            this.add.text(140, 23 + (index * stepY), easeFnName).setOrigin(1, 0).setFontSize(14)
        }

        var markers = this.add.group({ key: 'bar', repeat: 27, setXY: { x: 196, y: 32, stepY }, setAlpha: { value: 0.3 } });

        var images = this.add.group({ key: 'bar', repeat: 27, setXY: { x: 196, y: 32, stepY } });


        var _this = this;

        images.children.iterate(function (child) {

            _this.tweens.add({
                targets: child,
                x: 700,
                ease: eases.shift(),
                duration: 1500,
                delay: 1000,
                yoyo: true,
                repeat: -1,
                repeatDelay: 1000,
                hold: 1000
            });

        });
        
        this.input.once("pointerdown", () => {
            this.scene.start("TestScene");
        }, this);

	}

	update() {
		
	}

}
