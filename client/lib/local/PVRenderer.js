function PVRenderer(){
	//Canvas dimensions
	this.height = 480;
	this.width = 640;
	
	//Main canvas
	this.c;
	this.c_context;
	
	//Buffer canvas
	this.b_c;
	this.b_c_context;
	
	this.render_queue = new Array();
}

//Adds a renderable object to the current queue
PVRenderer.prototype.add_to_queue = function(RenderableObject){
	this.render_queue.push(RenderableObject);
}

//Empties the current queue
PVRenderer.prototype.empty_queue = function(){
	this.render_queue = new Array();
}

//Sorts the render queue using merge sort on the z value
PVRenderer.prototype.sort_queue = function(){
	TopDownMergeSort(this.render_queue);
}

//Clears the buffer canvas to black
PVRenderer.prototype.clear_buffer = function(){
	this.b_c_context.fillStyle = "#000000";
	this.b_c_context.fillRect(0,0,this.b_c.width,this.b_c.height);
}

//Renders the current queue
PVRenderer.prototype.render = function(){
	this.sort_queue();
	this.clear_buffer();
	this.draw();
	this.empty_queue();
}

//Draws the queue to the buffer canvas, then copies to the main canvas
PVRenderer.prototype.draw = function(){
	//Copies the renderer object
	var self = this;
	
	//Loops through render queue
	this.render_queue.forEach(function(elem){
		//Checks if the object is renderable
		if(typeof(elem.RenderableObject) !== "undefined"){
			//Gets the type of object
			if(elem.visible != false){
				var type = elem.get_type();
				switch(type){
					case "text":
						var text_object = elem.text;
						
						//Get them settings set
						var text = typeof text_object["text"] !== "undefined" ? text_object["text"] : "";
						var size = typeof text_object["size"] !== "undefined" ? text_object["size"] : 12;
						var font = typeof text_object["font"] !== "undefined" ? text_object["font"] : "Arial";
						var align = typeof text_object["text_align"] !== "undefined" ? text_object["text_align"] : "left";
						
						self.b_c_context.font = "" + size + "px " + font;
						self.b_c_context.fillStyle  = elem.color;
						self.b_c_context.textAlign = align;
						self.b_c_context.textBaseline = "top";
						
						//Word wrap
						var words = text.split(" ");
						var line = "";
						var height = size + Math.floor(size / 2);
						var tempY = elem.y;
						for(var i in words){
							var testLine = line + words[i] + " ";
							var metrics = self.b_c_context.measureText(testLine);
							var testWidth = metrics.width;
							if (testWidth > elem.width && i > 0){
								self.b_c_context.fillText(line, elem.x, tempY, elem.width, elem.height);
								line = words[i] + " ";
								tempY += height / 3.5;
							}else{
								line = testLine;
							}
						}
						self.b_c_context.fillText(line, elem.x, tempY, elem.width, elem.height);
						//End word wrap
						
						break;
					case "image":
						var temp_image = elem.get_image();
						self.b_c_context.drawImage(temp_image, elem.x, elem.y, elem.width, elem.height);
						break;
					case "color":
						self.b_c_context.fillStyle = elem.color;
						self.b_c_context.fillRect(elem.x,elem.y,elem.width,elem.height);
						break;
					default:
						//Object failed to render
						log.throw_error("<PVRenderer><draw>",101);
						break;
				}
			}
		}else{
			//Object not renderable
			log.throw_error("<PVRenderer><draw>",102);
		}
	});
	
	this.c_context.drawImage(this.b_c, 0, 0);
	return 1;
}

//Initializes the renderer, creates canvases
PVRenderer.prototype.initialize = function(){
	//Create main canvas
	this.c = this.create_canvas("c");
	this.c_context = this.c.getContext("2d");
	
	//Create buffer canvas
	this.b_c = this.create_canvas("b_c");
	this.b_c_context = this.b_c.getContext("2d");
	
	//Add the main canvas to the page
	document.body.appendChild(this.c);
}

//Creates a canvas element
PVRenderer.prototype.create_canvas = function(name){
	//Create canvas
	var canvas = document.createElement("canvas");
	
	//Set properties
	canvas.id = name;
	canvas.width = this.width;
	canvas.height = this.height;
	
	//Returns canvas
	return canvas;
}