function SceneManager(){
	this.active_scene;
	this.scene_list = new Array();
	
	
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