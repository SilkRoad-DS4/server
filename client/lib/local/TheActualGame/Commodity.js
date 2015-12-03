function Commodity(name, price, count){
	//Javascript work around, silly multiple inheritence rules
	this.Commodity = true;
	
	//Name of the commodity
	this.name = name.toLowerCase();
	
	//Base price of the commodity (multiplied by cities
	this.price = price;
	
	//Number of the commodity
	this.count = typeof count !== "undefined" ? count : 0;
}

Commodity.prototype.initialize = function(){

}	

//Buys a single commodity
Commodity.prototype.buy = function(){
	//Increase your count
	this.count++;
}	

//Sells a single commodity
Commodity.prototype.sell = function(){
	//Check if you have more than one
	if(this.count > 0){
	
		//Decrease the count
		this.count--;
		
		//Return a success
		return true;
	}
	
	//You don't have any dipshit
	return false;
}	

//If you get a negative number, the city you named does not exist
Commodity.prototype.get_price = function(city){

	//Make the city name nice
	var modifier = city.price_modifier[this.name] !== "undefined" ? city.price_modifier[this.name] : -1;
	
	//Get the price
	return this.base_price * modifier;
	
}