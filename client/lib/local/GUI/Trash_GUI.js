function TestSprite(){
	Sprite.call(this);
	
	this.name = "TestSprite";
	
	this.width = 384;
	this.height = 256;
	this.section_height = 32;
	this.section_width = 32;
	this.sprite_count_x = 7;
	this.sprite_count_y = 1;
	this.frame_wait_count = 12;
	
	//Images
	this.main_image_src = "characterSpriteSheet.png";

}
TestSprite.prototype = new Sprite();
TestSprite.prototype.constructor = TestSprite;

function TestSpriteObject(){
	RenderableObject.call(this);
	
	this.name = "TestSpriteObject";
	
	this.x = 0;
	this.y = 0;
	this.z = 1000;
	
	this.width = 32;
	this.height = 32;

	//Images
	this.image_src.push({"key":"default","value":new TestSprite()});

}
TestSpriteObject.prototype = new RenderableObject();
TestSpriteObject.prototype.constructor = TestSpriteObject;

TestSpriteObject.prototype.update = function(){
	var tempPos = TheActualGame.get_player_position();

	this.x = tempPos["x"];
	this.y = tempPos["y"] - 14;
}