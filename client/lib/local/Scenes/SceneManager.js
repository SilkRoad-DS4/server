function SceneManager(renderer){
	this.active_scene;
	this.scene_list = new Array();
	this.renderer = renderer;
	
}

SceneManager.prototype.initialize = function(){
	this.add_scene({"name":"world", "scene":new WorldScene(0, this.renderer, this)});
	this.add_scene({"name":"chittagong", "scene":new BangladeshChittagong(0, this.renderer, this)});
	this.add_scene({"name":"suez", "scene":new EgyptSuez(0, this.renderer, this)});
	this.add_scene({"name":"madras", "scene":new IndiaMadras(0, this.renderer, this)});
	this.add_scene({"name":"venice", "scene":new ItalyVenice(0, this.renderer, this)});
	this.add_scene({"name":"debal", "scene":new PakistanDebal(0, this.renderer, this)});
	this.add_scene({"name":"moscow", "scene":new RussiaAstrakham(0, this.renderer, this)});
	this.add_scene({"name":"colombo", "scene":new SrilankaColombo(0, this.renderer, this)});
	this.add_scene({"name":"constantinople", "scene":new TurkeyConstantinople(0, this.renderer, this)});
	this.add_scene({"name":"hanoi", "scene":new VeitnamHanoi(0, this.renderer, this)});
	this.add_scene({"name":"aden", "scene":new YemenAden(0, this.renderer, this)});
	this.add_scene({"name":"end", "scene":new EndScene(0, this.renderer, this)});
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