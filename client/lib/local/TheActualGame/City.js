function City(base_gold, commodity, modifiers){
	//Javascript work around, silly multiple inheritence rules
	this.City = true;
	
	this.enabled = true;
	
	//The city's commodity
	this.commodity = commodity;
	
	//Current gold of the city
	this.gold = base_gold;
	
	//Used to calculate gold growth
	this.base_gold = base_gold;
	
	//The selling price of commodities
	if(typeof modifiers !== "undefined"){
		for(mod of modifiers){
			
		}
	}	
	
	this.base_modifier =  ? modifiers : {
		
	
	};
	this.price_modifier = typeof modifiers !== "undefined" ? modifiers : {
		
	
	};
}

City.prototype.update = function(){
	this.increase_gold;
	this.change_prices;
}	

City.prototype.buy = function(com_name){
	//Get the commodity name
	com_name = com_name.toLowerCase();
}	

City.prototype.sell = function(com_name){
	//Get the commodity name
	com_name = com_name.toLowerCase();
}	



City.prototype.toggle_enabled = function(){
	this.enabled = this.enabled ? false : true;
}	

City.prototype.increase_gold = function(){
	this.gold += (this.base_gold / 4) - (this.base_gold / 16);
	this.gold = Math.floor(this.gold > 0 ? this.gold : 0);
}

//If you get a negative number, the city you named does not exist
City.prototype.get_price = function(com_name){ 
	com_name = com_name.toLowerCase();
	var modifier = typeof this.price_modifier[com_name] !== "undefined" ? this.price_modifier[com_name] : -1;
	return modifier;
}