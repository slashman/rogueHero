const AudioTracks = {
    loadAudio(game) {
        this.audio = game.audio;
        // Register the music
		this.audio.registerMx({
			key: 'mx_campus',
			src: 'CampusWarm.ogg',
			volume: 0.5,
			loop: true
		});
		this.audio.registerMx({
			key: 'mx_commCenter',
			src: 'CommCenterWarm.ogg',
			volume: 0.5,
			loop: true
		});
		this.audio.registerMx({
			key: 'mx_home',
			src: 'Home.ogg',
			volume: 0.5,
			loop: true
		});
		this.audio.registerMx({
			key: 'mx_town',
			src: 'Santa_Cruz.ogg',
			volume: 0.5,
			loop: true
		});


		// Register the sound effects
		//this.audio.registerSfx({ key: 'shot1', src: 'sfx_shoot_01.ogg', stereo: 0 });
	}
}

export default AudioTracks;