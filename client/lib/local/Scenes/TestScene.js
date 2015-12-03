function TestScene(id, renderer, parent){
	Scene.call(this, id, renderer, parent);
	
	this.add_object(new TestBackground());
	this.add_object(new TestButton());
	this.add_object(new TestMusic());
}
TestScene.prototype = new Scene(0);