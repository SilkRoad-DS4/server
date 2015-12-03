function Player(){
	//Javascript work around, silly multiple inheritence rules
	this.gold = 0;
	this.location = {"name":"hanoi"};
}

Player.prototype.initialize = function(){
	//Pick starting location
	this.location = {"name":"hanoi"};
	//Pick starting commodities based on starting location
	
}	

//If you get a negative number, you are poor
Player.prototype.get_gold = function(){ 
	return this.gold;
}

Player.prototype.goto_city = function(){
	if()
}