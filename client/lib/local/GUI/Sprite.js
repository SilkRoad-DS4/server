function Sprite(){
	//Javascript work around, silly multiple inheritence rules
	this.Sprite = true;
	
	this.name = "";
	
	//Dimensions
	this.height = 0;
	this.width = 0;
	this.section_height = 0;
	this.section_width = 0;
	this.sprite_count_x = 0;
	this.sprite_count_y = 0;
	
	//Timing
	this.frame_wait_count;
	this.frame_number = 0;
	this.frame_current_count = -1;
	
	//Visual Options
	this.ci_canvas;
	this.current_image;
	
	this.main_image;
	this.main_image_src;
}

//Initializes the object
Sprite.prototype.initialize = function(){
	//resets the canvas
	this.reset_canvas();
	
	if(typeof(this.main_image_src) != "undefined"){
		this.load_image(this.name, this.main_image_src);
	}
}	

Sprite.prototype.reset_canvas = function(){
	//Creates the current image canvas
	this.ci_canvas = document.createElement("canvas");
	this.ci_canvas.id = name;
	this.ci_canvas.width = this.section_height;
	this.ci_canvas.height = this.section_width;
	this.current_image = this.ci_canvas.getContext("2d");
}

//Initializes the object
Sprite.prototype.get_image = function(){
	
	
	if(this.frame_current_count >= this.frame_wait_count || this.frame_current_count < 0){
		this.frame_current_count = 0;
		
		this.frame_number++;
		
		this.reset_canvas();
		
		if(this.frame_number >= this.sprite_count_x * this.sprite_count_y){
			this.frame_number = 0;
		}
		
		var x = this.frame_number % this.sprite_count_x;
		var y = Math.floor(this.frame_number / this.sprite_count_x);
		
		if(typeof(this.main_image) != "undefined"){
			this.current_image.drawImage(this.main_image,this.section_width * x, this.section_height * y, this.section_width, this.section_height, 0, 0, this.section_width, this.section_height);
		}
	}
	
	this.frame_current_count++;
	return this.ci_canvas;
}	

//Begins loading the object for the scene
Sprite.prototype.load_image = function(name, src){	
	Library.load_image(name, "Sprite_Sheet",  src, this);
}

//Sets the object's image after it loads
Sprite.prototype.set_image = function(name, image){
	this.main_image = image;
}