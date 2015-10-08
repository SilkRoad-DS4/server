function Game(){
	this.lib = new Library();
	this.rengine = new Renderer();
	this.updater = null;
}

Game.prototype.start = function(){
	var self = this;
	this.updater = setInterval(self.update, 1000/60);
	
}

Game.prototype.update = function(){
	

}

Game.prototype.stop = function(){
	clearInterval(this.updater);

}


