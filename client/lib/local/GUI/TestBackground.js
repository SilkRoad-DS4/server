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