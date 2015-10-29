function InteractiveObject(){
	//Javascript work around, silly multiple inheritence rules
	this.InteractiveObject = true;
	this.enabled = true;
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
	if(this.enabled != true){return;};
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

InteractiveObject.prototype.onMouseOver = function(){
	
	
}

InteractiveObject.prototype.onClick = function(x,y){
	var mouse_over = this.isMouseOver(x,y);
	if()
	
}