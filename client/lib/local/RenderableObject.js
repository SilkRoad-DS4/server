function RenderableObject(){
	//Javascript work around, silly multiple inheritence rules
	this.RenderableObject = true;
	
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
	this.color;
	this.image;
}

RenderableObject.prototype.get_type = function(){
	if(typeof(this.image) !== "undefined"){
		return "image";
	}
	if(typeof(this.color) !== "undefined"){
		return "color";
	}
	
	//Return undefined
	return;
}

RenderableObject.prototype.set_values = function(values){
	this.x = typeof(values["x"]) == "undefined" ? this.x : values["x"];
	this.y = typeof(values["y"]) == "undefined" ? this.y : values["y"];
	this.z = typeof(values["z"]) == "undefined" ? this.z : values["z"];
	
	this.height = typeof(values["height"]) == "undefined" ? this.height : values["height"];
	this.width = typeof(values["width"]) == "undefined" ? this.width : values["width"];
	
	this.opacity = typeof(values["opacity"]) == "undefined" ? this.opacity : values["opacity"];
	this.visible = typeof(values["visible"]) == "undefined" ? this.visible : values["visible"];
	this.color = typeof(values["color"]) == "undefined" ? this.color : values["color"];
}