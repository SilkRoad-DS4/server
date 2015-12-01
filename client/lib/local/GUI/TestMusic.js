function TestMusic(){
	InteractiveObject.call(this);
	
	this.name = "Test_Music";

	//Music
	this.sound_src.push({"key":"ambient","value":"testScene/music.mp3","loop":true,"volume":0.1});
	
	console.log("derp");
}
TestMusic.prototype = new InteractiveObject();
TestMusic.prototype.constructor = TestMusic;

TestMusic.prototype.update = function(){
	//Plays the music once it loads
	if(typeof this.sound["ambient"] !== "undefined"){
		if(this.sound["ambient"].paused == true){
			this.sound["ambient"].play();
		}
	}
}