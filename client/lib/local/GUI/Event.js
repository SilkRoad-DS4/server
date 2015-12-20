function Event(){
	RenderableObject.call(this);
	InteractiveObject.call(this);
	
	this.Event = true;
	this.name = "Event";
	this.x = 0;
	this.y = 0;
	this.z = 1000;
	
	this.width = 640;
	this.height = 480;
	
	this.previous_year = -500;
	
	this.object_list = new Array();
}
Event.prototype = new RenderableObject();
mixin(Event,InteractiveObject);
Event.prototype.constructor = Event;

Event.prototype.add_object = function(obj){
	obj.parent = this;
	this.object_list.push(obj);
}

Event.prototype.render = function(){
	var self = this;
	this.object_list.forEach(function(elem){
		if(elem.RenderableObject){
			elem.x += this.x;
			elem.y += this.y;
			elem.z += this.z;
			self.renderer.add_to_queue(elem);
		}
	});
}

Event.prototype.update = function(){
	
}