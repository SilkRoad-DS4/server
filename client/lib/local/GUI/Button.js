function Button(){
	
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
}
Button.prototype = new InteractiveObject();
mixin(Button,RenderableObject);
Button.prototype.constructor = Button;