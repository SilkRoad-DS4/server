function City(name, base_gold, commodities, modifiers){
	//Javascript work around, silly multiple inheritence rules
	this.City = true;
	this.name = name;
	
	this.enabled = true;
	
	//Current gold of the city
	this.gold = base_gold;
	
	//Used to calculate gold growth
	this.base_gold = base_gold;
	
	//The selling price of commodities
	this.price_modifier = typeof modifiers !== "undefined" ? modifiers : {
		
	
	};
}

City.prototype.initialize = function(){

}	

City.prototype.toggle_enabled = function(){
	this.enabled = this.enabled ? false : true;
}	

City.prototype.increase_gold = function(){
	this.gold += (this.base_gold / 4) - (this.base_gold / 16);
	this.gold = Math.floor(this.gold > 0 ? this.gold : 0);
}

//If you get a negative number, the city you named does not exist
City.prototype.get_price = function(city_name){ 
	var city = city_name.toLowerCase();
	var modifier = typeof this.price_modifier[city] !== "undefined" ? this.price_modifier[city] : -1;
	return this.base_price * modifier;
}