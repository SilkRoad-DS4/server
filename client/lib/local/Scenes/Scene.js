function Scene(id){
	this.id = id;
	this.next_scene;
	this.finished;
	this.object_list = new Array();
}

Scene.prototype.update = function(){
	
}

Scene.prototype.add_object = function(obj){
	this.object_list.push(obj);
}

Scene.prototype.get_finished = function(){
	return this.finished;
}

Scene.prototype.get_next_scene = function(){
	this.finished = false;
	return this.next_scene;
}