function Scene(id, renderer, parent){
	this.id = id;
	this.next_scene;
	this.finished = false;
	this.object_list = new Array();
	this.renderer = renderer;
	
	this.parent = parent;
}

Scene.prototype.initialize = function(){
	this.object_list.forEach(function(elem){
		if (typeof elem.initialize == "function"){
			elem.initialize();
		}
	});
}

Scene.prototype.update = function(){
	this.object_list.forEach(function(elem){
		if (typeof elem.update == "function"){
			elem.update();
		}
	});
	this.render();
}

Scene.prototype.render = function(){
	var self = this;
	this.object_list.forEach(function(elem){
		if(elem.RenderableObject){
			self.renderer.add_to_queue(elem);
		}
	});
}

Scene.prototype.add_object = function(obj){
	obj.parent = this;
	this.object_list.push(obj);
}

Scene.prototype.stop = function(){
	for (elem of this.object_list){
		if(typeof elem.stop == "function"){
			elem.stop();
		}
	}
}

Scene.prototype.mouse_event = function(e){
	switch(e.event){
		case "click":
			
			this.object_list.forEach(function(elem){
				if(elem.InteractiveObject){
					elem.onClickEvent(e.x,e.y);
				}
			});
			
			break;
		case "mousemove":
			
			this.object_list.forEach(function(elem){
				if(elem.InteractiveObject){
					elem.onMouseMoveEvent(e.x,e.y);
				}
			});
			
			break;
		default:
			break;
	}
}