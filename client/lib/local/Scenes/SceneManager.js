function SceneManager(renderer){
	this.active_scene;
	this.scene_list = new Array();
	this.renderer = renderer;
	
}

SceneManager.prototype.initialize = function(){
	//Add scenes
	this.add_scene({"name":"TestScene", "scene": new TestScene(0, this.renderer, this)});
	
	//set the active scene
	this.active_scene = this.scene_list[0]["scene"];
	
	//Initialize the scene
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
	//Search for the appropriate scene
	for(var i = 0; i < this.scene_list.length; i++){
		var scene = this.scene_list[i];
		if(scene["name"].toLowerCase() == scene_name){	
			
			//Kill previous scene
			this.active_scene.stop();
			
			//Scene found
			this.active_scene = scene["scene"];
			
			//Initialize the scene
			this.active_scene.initialize();
		}
	}
	
	
}

SceneManager.prototype.mouse_event = function(e){
	this.active_scene.mouse_event(e);
	
}