function SceneManager(renderer){
	this.active_scene;
	this.scene_list = new Array();
	this.renderer = renderer;
	
}

SceneManager.prototype.initialize = function(){
	this.add_scene(new TestScene(0, this.renderer));
	this.active_scene = this.scene_list[0];
	this.active_scene.initialize();
}

SceneManager.prototype.add_scene = function(scene){
	this.scene_list.push(scene);
}

SceneManager.prototype.update = function(){
	this.active_scene.update();
	var finished = this.active_scene.get_finished();
	if(finished){
		var next_scene = this.active_scene.get_next_scene();
		this.goto_scene(next_scene);
	}
	
}

SceneManager.prototype.goto_scene = function(id){
	
	
}

SceneManager.prototype.mouse_event = function(e){
	this.active_scene.mouse_event(e);
	
}