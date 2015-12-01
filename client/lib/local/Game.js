function Game(){
	this.rengine = new PVRenderer();
	this.scenes = new SceneManager(this.rengine);
	
	this.updater = null;
	
	this.initialize();
	this.name = "hi";
}

Game.prototype.initialize = function(){
	this.rengine.initialize();
	this.scenes.initialize();
	this.initialize_events();
	
}

Game.prototype.initialize_events = function(){
	var self = this;
	var canvas_id = "#" + this.rengine.c.id;
	
	//Triggers when the mouse clicks on the canvas
	$(canvas_id).click(function(e){
		//Get x and y coordinates of the mouse
		var offset = $(this).offset();
		var x = e.pageX - offset.left;
		var y = e.pageY - offset.top;
		self.scenes.mouse_event({"event":"click","x":x,"y":y});
	});
	
	//Triggers when the mouse moves over the canvas
	$(canvas_id).mousemove(function(e){
		//Get x and y coordinates of the mouse
		var offset = $(this).offset();
		var x = e.pageX - offset.left;
		var y = e.pageY - offset.top;
		self.scenes.mouse_event({"event":"mousemove","x":x,"y":y});
	});
	
}

Game.prototype.start = function(){
	var self = this;
	this.updater = setInterval(function(){self.update();}, 1000/60);
}

Game.prototype.update = function(){
	this.scenes.update();
	
	this.render();
}

Game.prototype.render = function(){
	this.rengine.render();
}

Game.prototype.stop = function(){
	clearInterval(this.updater);

}


