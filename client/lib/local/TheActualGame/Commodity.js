function Commodity(name, base_price, modifiers){
	//Javascript work around, silly multiple inheritence rules
	this.Commodity = true;
	this.name = name;
	this.base_price = base_price;
	this.price_modifier = typeof modifiers !== "undefined" ? modifiers : {
		
	
	};
}

Commodity.prototype.initialize = function(){

}	

//If you get a negative number, the city you named does not exist
Commodity.prototype.get_price = function(city_name){ 
	var city = city_name.toLowerCase();
	var modifier = typeof this.price_modifier[city] !== "undefined" ? this.price_modifier[city] : -1;
	return this.base_price * modifier;
}