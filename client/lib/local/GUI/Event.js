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
		if(TheActualGame.get_year_int() != this.previous_year){
			var isEvent = TheActualGame.is_event();
			if(isEvent == true){
				this.object_list.forEach(function(elem){
					if(typeof elem.update == "function"){
						elem.update();
					}
				});
				this.visible = true;
			}
			this.previous_year = TheActualGame.get_year_int();
			console.log(this.previous_year);
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
	this.add_object(new EventTitle());
	this.add_object(new EventText());
}
EventOverlay.prototype = new Event();
EventOverlay.prototype.constructor = EventOverlay;

function EventBackground(){
	RenderableObject.call(this);
	
	this.name = "EventBackground";
	
	this.x = 0;
	this.y = -20;
	this.z = 10000;
	
	this.width = 640;
	this.height = 480;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/EventBackground.png"});
}
EventBackground.prototype = new RenderableObject();
EventBackground.prototype.constructor = EventBackground;

function EventTitle(){
	RenderableObject.call(this);
	
	this.name = "EventTitle";
	this.color = "#000";
	
	this.text = {
	"text":"100 BC",
	"size":30,
	"font":"sarif",
	"text_align":"left"};
	
	this.x = 120;
	this.y = 50;
	this.z = 10001;
	
	this.width = 420;
	this.height = 480;
	
	this.update = function(){
		//Sets the Text to the city name
		var event = TheActualGame.get_event();
		this.text["text"] = event["title"];
	}
}
EventTitle.prototype = new RenderableObject();
EventTitle.prototype.constructor = EventTitle;

function EventText(){
	RenderableObject.call(this);
	
	this.name = "EventText";
	this.color = "#000";
	
	this.text = {
	"text":"100 BC",
	"size":18,
	"font":"SRScript sansserif",
	"text_align":"left"};
	
	this.x = 120;
	this.y = 90;
	this.z = 10002;
	
	this.width = 420;
	this.height = 480;
	
	this.update = function(){
		//Sets the Text to the city name
		var event = TheActualGame.get_event();
		this.text["text"] = event["text"];
	}
}
EventText.prototype = new RenderableObject();
EventText.prototype.constructor = EventText;