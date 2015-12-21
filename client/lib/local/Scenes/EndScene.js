function EndScene(id, renderer, parent){
	Scene.call(this, id, renderer, parent);

	this.add_object(new EndGameBackground());
	this.add_object(new FinalGold());

}
EndScene.prototype = new Scene(0);