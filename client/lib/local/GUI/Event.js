function Event(){
	RenderableObject.call(this);
	InteractiveObject.call(this);
	
	this.Event = true;
	this.name = "Event";
	this.x = 0;
	this.y = 0;
	this.z = 9999;
	
	this.width = 640;
	this.height = 480;
	
	this.previous_year = -500;
	this.current_year_finished = false;
	
	this.object_list = new Array();
	
	
	
	this.add_object = function(obj){
		obj.parent = this;
		this.object_list.push(obj);
	}

	this.render = function(renderer){
		var self = this;
		this.object_list.forEach(function(elem){
			if(elem.RenderableObject){
				elem.visible = self.visible;
				renderer.add_to_queue(elem);
			}
		});
	}

	//Initializes the object
	this.initialize = function(){
		if(typeof this.interactive_initialize == "function"){this.interactive_initialize();}
		if(typeof this.renderable_initialize == "function"){this.renderable_initialize();}
		this.object_list.forEach(function(elem){
			if (typeof elem.initialize == "function"){
				elem.initialize();
			}
		});
	}	

	this.update = function(){
		if(this.current_year_finished != true){
			var isEvent = TheActualGame.is_event();
			if(isEvent == true){
				this.object_list.forEach(function(elem){
					if(typeof elem.get_event_text == "function"){
						elem.get_event_text();
					}
				});
				this.visible = true;
			}
			this.current_year_finished = true;
		}
	}

	this.onClick = function(){
		this.visible = false;
	}
	
}
Event.prototype = new RenderableObject();
mixin(Event,InteractiveObject);
Event.prototype.constructor = Event;




function EventOverlay(){
	Event.call(this);
	
	this.Event = true;
	this.name = "EventOverlay";

	this.add_object(new EventBackground());
}
EventOverlay.prototype = new Event();
EventOverlay.prototype.constructor = EventOverlay;

function EventBackground(){
	RenderableObject.call(this);
	
	this.name = "EventBackground";
	
	this.x = 0;
	this.y = 0;
	this.z = 10000;
	
	this.width = 640;
	this.height = 480;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/EventBackground.jpg"});
}
EventBackground.prototype = new RenderableObject();
EventBackground.prototype.constructor = EventBackground;
