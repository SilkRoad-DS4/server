function InteractiveObject(){
	//Javascript work around, silly multiple inheritence rules
	this.InteractiveObject = true;
	this.enabled = true;
	
	this.sound = new Array();
	this.sound_src = new Array();
	this.mouse_on = false;
}

InteractiveObject.prototype.initialize = function(){
	if(typeof this.interactive_initialize == "function"){this.interactive_initialize();}
	if(typeof this.renderable_initialize == "function"){this.renderable_initialize();}
}	

InteractiveObject.prototype.interactive_initialize = function(){

	for (elem of this.sound_src){
		this.load_sound(elem);
	}

}

InteractiveObject.prototype.disable = function(){
	this.enabled = false;
}
InteractiveObject.prototype.enable = function(){
	this.enabled = true;
}
InteractiveObject.prototype.toggle_enable = function(){
	this.enabled = this.enabled ? false : true;
}

InteractiveObject.prototype.isMouseOver = function(x,y){
	//Ensure all variables are defined
	if(this.enabled != true){return false;};
	if(typeof(this.x) == "undefined"){return false;};
	if(typeof(this.x) == "undefined"){return false;};
	if(typeof(this.y) == "undefined"){return false;};
	if(typeof(this.height) == "undefined"){return false;};
	if(typeof(this.width) == "undefined"){return false;};
	
	//Check x boundries
	if(x < this.x|| x > this.x + this.width){return false;}
	
	//Check y boundries
	if(y < this.y || y > this.y + this.height){return false;}
	
	//If the check was successful
	return this.isExplicitMouseOver(x - this.x, y - this.y);
}

InteractiveObject.prototype.isExplicitMouseOver = function(x,y){
	if(typeof(this.RenderableObject) !== "undefined"){
		//CHECK DA PIXELS MAN!
	}
	return true;
}

InteractiveObject.prototype.onMouseMoveEvent = function(x,y){
	if(this.isMouseOver(x,y)){
		if(this.mouse_on == false){
			
			//Activates onMouseEnter
			this.onMouseEnter(x,y);
			if(typeof(this.sound["onMouseEnter"]) !== "undefined"){
				this.sound["onMouseEnter"].play();
			}
			if(typeof(this.image_state) !== "undefined"){
				this.image_state = "onMouseEnter";
			}
			this.mouse_on = true;
		}
		this.onMouseMove(x,y);
	}else{
		if(this.mouse_on == true){
			//Activates onMouseEnter
			this.onMouseLeave(x,y);
			if(typeof(this.sound["onMouseLeave"]) !== "undefined"){
				this.sound["onMouseLeave"].play();
			}
			if(typeof(this.image_state) !== "undefined"){
				this.image_state = "default";
			}
			
		};
		this.mouse_on = false;
	}
}


InteractiveObject.prototype.onClickEvent = function(x,y){
	if(this.mouse_on == true){
		
		//Activates onClick
		this.onClick(x,y);
		if(typeof(this.sound["onClick"]) !== "undefined"){
			this.sound["onClick"].play();
		}		
	}
}

//Begins loading the sound for the object
InteractiveObject.prototype.load_sound = function(obj){	
	Library.load_sound(obj, this);
}

//Sets the object's image after it loads
InteractiveObject.prototype.set_sound = function(name, sound){
	this.sound[name] = sound;
}

//Mouse Events
InteractiveObject.prototype.onClick = function(){}
InteractiveObject.prototype.onMouseEnter = function(){}
InteractiveObject.prototype.onMouseMove = function(){}
InteractiveObject.prototype.onMouseLeave = function(){}