function RenderableObject(){
	//Javascript work around, silly multiple inheritence rules
	this.RenderableObject = true;
	
	//Name
	this.name = "";
	
	//Position
	this.x = 0;
	this.y = 0;
	this.z = 0;
	
	//Dimensions
	this.height = 0;
	this.width = 0;
	
	//Visual Options
	this.opacity = 1; //Unsupported
	this.visible = true;
	this.color = "#000";
	this.image = new Array();
	this.image_src = new Array();
	this.image_state = "default";
	this.text;
}

//Initializes the object
RenderableObject.prototype.initialize = function(){
	if(typeof this.interactive_initialize == "function"){this.interactive_initialize();}
	if(typeof this.renderable_initialize == "function"){this.renderable_initialize();}
}	


//Initializes the object
RenderableObject.prototype.renderable_initialize = function(){
	for (elem of this.image_src){
		this.load_image(elem["key"], elem["value"]);
	}
	
}
	
//Gets the type of the object for rendering
RenderableObject.prototype.get_type = function(){
	if(typeof(this.text) !== "undefined"){
		return "text";
	}
	if(typeof(this.image["default"]) !== "undefined"){
		return "image";
	}
	if(typeof(this.color) !== "undefined"){
		return "color";
	}
	
	//Return undefined
	return;
}

//Gets the type of the object for rendering
RenderableObject.prototype.get_image = function(){
	
	if(typeof(this.image[this.image_state]) !== "undefined"){
		return this.image[this.image_state];
	}
	
	return this.image["default"];
	
}

//Allows for changing values while running
RenderableObject.prototype.set_values = function(values){
	this.x = typeof(values["x"]) == "undefined" ? this.x : values["x"];
	this.y = typeof(values["y"]) == "undefined" ? this.y : values["y"];
	this.z = typeof(values["z"]) == "undefined" ? this.z : values["z"];
	
	this.height = typeof(values["height"]) == "undefined" ? this.height : values["height"];
	this.width = typeof(values["width"]) == "undefined" ? this.width : values["width"];
	
	this.opacity = typeof(values["opacity"]) == "undefined" ? this.opacity : values["opacity"];
	this.visible = typeof(values["visible"]) == "undefined" ? this.visible : values["visible"];
	this.color = typeof(values["color"]) == "undefined" ? this.color : values["color"];
	this.image_src = typeof(values["image"]) == "undefined" ? this.image_src : values["image"];
}

//Begins loading the object for the scene
RenderableObject.prototype.load_image = function(name, src){	
	Library.load_image(name, src, this);
}

//Sets the object's image after it loads
RenderableObject.prototype.set_image = function(name, image){
	this.image[name] = image;
}