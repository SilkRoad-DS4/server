function TestSprite(){
	Sprite.call(this);
	
	this.name = "TestSprite";
	
	this.width = 384;
	this.height = 256;
	this.section_height = 32;
	this.section_width = 32;
	this.sprite_count_x = 3;
	this.sprite_count_y = 4;
	this.frame_wait_count = 12;
	
	//Images
	this.main_image_src = "test_sprite_01.png";

}
TestSprite.prototype = new Sprite();
TestSprite.prototype.constructor = TestSprite;

function TestSpriteObject(){
	RenderableObject.call(this);
	
	this.name = "TestSpriteObject";
	
	this.x = 320;
	this.y = 240;
	this.z = 10000;
	
	this.width = 32;
	this.height = 32;

	//Images
	this.image_src.push({"key":"default","value":new TestSprite()});

}
TestSpriteObject.prototype = new RenderableObject();
TestSpriteObject.prototype.constructor = TestSpriteObject;