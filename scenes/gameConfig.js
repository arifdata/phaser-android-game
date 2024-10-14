import Phaser from 'phaser';
import TestScene from './TestScene';
import ParticleScene from './ParticleScene';
import ParticleSceneNoFX from './ParticleSceneNoFX';
import CardScene from './CardScene';
import EaseScene from './EaseScene';
import AudioScene from './AudioScene';
import TweenScene from './TweenScene';

export default {
	type: Phaser.AUTO,
	roundPixels: true,
	backgroundColor: '#000000',
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 1280,
		height: 720,
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 300},
			debug: false
		}
	},
	title: "Phaser Android Game",
	scene: [TestScene, ParticleScene, ParticleSceneNoFX, CardScene, EaseScene, AudioScene, TweenScene]
};
