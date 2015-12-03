function TestButton(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "Test_Button";
	
	this.x = 64;
	this.y = 64;
	this.z = 500;
	
	this.width = 64;
	this.height = 64;
	
	//Images
	this.image_src.push({"key":"default","value":"buttons/testButton.png"});
	this.image_src.push({"key":"onMouseEnter","value":"buttons/testButtonOver.png"});
	
	//Sounds
	this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
TestButton.prototype = new InteractiveObject();
mixin(TestButton,RenderableObject);
TestButton.prototype.constructor = TestButton;

TestButton.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.parent.parent.goto_scene("testscene");
}

TestButton.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

TestButton.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

TestButton.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function TestBackground(){
	RenderableObject.call(this);
	
	this.name = "Test_Background";
	
	//Dimensions
	this.width = 640;
	this.height = 480;
	
	
	this.image_src.push({"key":"default","value":"backgrounds/test_wallpaper.jpg"});
	
}
TestBackground.prototype = new RenderableObject();
TestBackground.prototype.constructor = TestBackground;

function TestMusic(){
	InteractiveObject.call(this);
	
	this.name = "Test_Music";

	//Music
	this.sound_src.push({"key":"ambient","value":"testScene/music.mp3","loop":true,"volume":0.1});
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