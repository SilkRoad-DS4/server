function TestButton(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "Test_Button";
	
	this.x = 64;
	this.y = 64;
	this.z = 500;
	
	this.width = 64;
	this.height = 64;

	//Text
	this.text = {"text":"Hello there.","size":12,"font":"arial","text_align":"right"};
	
	//Images
	this.image_src.push({"key":"default","value":"buttons/test_button.png"});
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