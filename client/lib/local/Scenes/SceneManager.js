function SceneManager(renderer){
	this.active_scene;
	this.scene_list = new Array();
	this.renderer = renderer;
	
}

SceneManager.prototype.initialize = function(){
	this.add_scene({"name":"testscene", "scene":new TestScene(0, this.renderer, this)});
	this.active_scene = this.scene_list[0]["scene"];
	this.active_scene.initialize();
}

SceneManager.prototype.add_scene = function(scene){
	this.scene_list.push(scene);
}

SceneManager.prototype.update = function(){
	this.active_scene.update();

}

SceneManager.prototype.goto_scene = function(scene_name){
	scene_name = scene_name.toLowerCase();
	for(var i = 0; i < this.scene_list.length; i++){
		var name = this.scene_list[i]["name"].toLowerCase();
		
		if(name == scene_name){
			//Stop Scene
			this.active_scene.stop();
			
			//Get next scene
			this.active_scene = this.scene_list[i]["scene"];
			
			//Initialize scene
			this.active_scene.initialize();
		}
	
	}
	
}

SceneManager.prototype.mouse_event = function(e){
	this.active_scene.mouse_event(e);
	
}