function Player(){
	//Javascript work around, silly multiple inheritence rules
	this.gold = 100;
	this.location = "hanoi";
	this.inventory = {
		"jade": new Commodity("jade",60,0),
		"pottery": new Commodity("pottery",30,0),
		"honey": new Commodity("honey",20,0),
		"gunpowder": new Commodity("gunpowder",70,0),
		"cattle": new Commodity("cattle",50,0),
		"horses": new Commodity("horses",40,0),
		"leather": new Commodity("leather",50,0),
		"fur": new Commodity("fur",30,0)
	}
}

Player.prototype.initialize = function(){
	//Pick starting location
	this.location = {"name":"hanoi"};
	//Pick starting commodities based on starting location
	
}	