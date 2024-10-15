import {Scene} from 'phaser';
import star from '/assets/star3.png';


export default class ParticleSceneNoFX extends Scene {
  testText: Phaser.GameObjects.Text;
  logo: Phaser.GameObjects.Image;

	constructor(){
		super({key: "ParticleSceneNoFX"});
	}
	
	preload(){
		this.load.image('star', star);
	}
	
	create(){
		    this.testText = this.add.text(10, 10, "Only Particle", {fontSize: "32px", fontStyle: "bold"});
        const emitter = this.add.particles(640, 360, 'star', {
            angle: { min: 240, max: 300 },
            speed: { min: 200, max: 300 },
            lifespan: 4000,
            gravityY: 180,
            quantity: 2,
            bounce: 0.4,
            bounds: new Phaser.Geom.Rectangle(100, -300, 1000, 750)
        });

        emitter.particleBringToTop = false;
        // const fx = emitter.postFX.addBokeh(0.5, 10, 0.2);
        this.logo = this.add.image(640, 360, 'logo').setOrigin(0);
        // this.logo.postFX.addBokeh(0.5, 10, 0.2);
        
        this.input.once("pointerdown", () => {
            this.scene.start("CardScene");
        }, this);

	}

	update() {
        this.logo.rotation -= 0.05;

	}

}
