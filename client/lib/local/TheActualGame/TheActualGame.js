var TheActualGame = (function(){
	var event = {
		"-130":{
			"title":"Welcome to the Silk Road",
			"text":"The aim of the game is to travel from city to city buying and selling commodities and trying to raise as much gold as possible as time progresses throughout the history of the Silk Road. You begin with 100 gold, and you can enter a city by clicking the Enter City parchment. To travel, you click on a city that has a road connected to the city you are currently in. Once in a city, you can see what the have to sell, and how much gold they currently have. Their amount of gold increases as time passes and as you travel. Keep in mind that commodities are worth more in some places than others!",
			"event":""
		},
		"30":{
			"title":"30 BC - Silk Roads Expand",
			"text":"Trade increases between China, South East Asia, India, Middle East, Africa and Europe. City gold now increases faster.",
			"event":""
		},
		"10":{
			"title":"1 CE - Han Army Created",
			"text":"The Han Army now polices the Silk Road with 70000 infantry and cavalry. Crime rates are down. \n Cities now have increased gold.",
			"event":""
		}
	
	};
	var starting_year = -130;
	var year = -130;
	var commodities = {
		"jade": new Commodity("jade",60),
		"pottery": new Commodity("pottery",30),
		"honey": new Commodity("honey",20),
		"gunpowder": new Commodity("gunpowder",70),
		"cattle": new Commodity("cattle",50),
		"horses": new Commodity("horses",40),
		"leather": new Commodity("leather",50),
		"fur": new Commodity("fur",30)
	};
	var cities = {
		"aden": new City(
			252,
			295,
			200,
			commodities["horses"],
			{
				"jade":1.8,
				"pottery":1.2,
				"honey":1.3,
				"gunpowder":1.4,
				"cattle":1.0,
				"horses":0.5,
				"leather":1.0,
				"fur":1.5
			}),
		"chittagong": new City(
			427,
			257,
			200,
			commodities["pottery"],
			{
				"jade":1,
				"pottery":0.5,
				"honey":1.2,
				"gunpowder":1.0,
				"cattle":1.2,
				"horses":1.1,
				"leather":1.3,
				"fur":1.6
			}),
		"colombo": new City(
			385,
			327,
			200,
			commodities["gunpowder"],
			{
				"jade":1.3,
				"pottery":1,
				"honey":0.75,
				"gunpowder":0.5,
				"cattle":1.0,
				"horses":1.2,
				"leather":1.3,
				"fur":1.8
			}),
		"constantinople": new City(
			182,
			187,
			200,
			commodities["pottery"],
			{
				"jade":1.7,
				"pottery":1.5,
				"honey":1.5,
				"gunpowder":1.0,
				"cattle":1.1,
				"horses":1.2,
				"leather":1.3,
				"fur":1.3
			}),
		"debal": new City(
			332,
			254,
			200,
			commodities["cattle"],
			{
				"jade":1.0,
				"pottery":1.5,
				"honey":0.75,
				"gunpowder":1.2,
				"cattle":0.5,
				"horses":1.1,
				"leather":1.3,
				"fur":0.75
			}),
		"hanoi": new City(
			500,
			267,
			200,
			commodities["jade"],
			{
				"jade":0.5,
				"pottery":0.9,
				"honey":1.1,
				"gunpowder":1.0,
				"cattle":1.2,
				"horses":1.1,
				"leather":1.3,
				"fur":1.8
			}),
		"madras": new City(
			380,
			297,
			200,
			commodities["honey"],
			{
				"jade":1.2,
				"pottery":1,
				"honey":0.5,
				"gunpowder":1.0,
				"cattle":0.9,
				"horses":0.9,
				"leather":1.3,
				"fur":1.0
			}),
		"moscow": new City(
			212,
			130,
			200,
			commodities["fur"],
			{
				"jade":1.6,
				"pottery":1.3,
				"honey":2.0,
				"gunpowder":1.8,
				"cattle":1.2,
				"horses":1.4,
				"leather":1.3,
				"fur":0.5
			}),
		"suez": new City(
			200,
			229,
			200,
			commodities["leather"],
			{
				"jade":1.8,
				"pottery":1.4,
				"honey":1.2,
				"gunpowder":0.5,
				"cattle":1.0,
				"horses":0.9,
				"leather":0.5,
				"fur":1.2
			}),
		"venice": new City(
			107,
			170,
			200,
			commodities["horses"],
			{
				"jade":1.5,
				"pottery":1.5,
				"honey":1.8,
				"gunpowder":0.8,
				"cattle":1.0,
				"horses":0.75,
				"leather":1.0,
				"fur":1.0
			}),
	}
	var node_connections ={
		"aden":{
			"debal":true,
			"madras":true,
			"suez":true		
		},
		"chittagong":{
			"colombo":true,
			"debal":true,
			"hanoi":true
		},
		"colombo":{
			"chittagong":true,
			"madras":true
		},
		"constantinople":{
			"suez":true,
			"venice":true
		},
		"debal":{
			"aden":true,
			"chittagong":true,
			"moscow":true
		},
		"hanoi":{
			"chittagong":true,
			"moscow":true
		},
		"madras":{
			"aden":true,
			"colombo":true
		},
		"moscow":{
			"debal":true,
			"hanoi":true,
			"venice":true
		},
		"suez":{
			"aden":true,
			"constantinople":true
		},
		"venice":{
			"constantinople":true,
			"moscow":true
		}
	}

	var player = new Player();
	
	var update = function(){
		
		//Updates all the cities
		for(city in cities){
			cities[city].update();
		}
		
		//Update the year
		update_year();
	}
	
	//Increases the year (Soon to be based on travel length)
	var update_year = function(){
		year += 5;
	}
	
	var player_goto = function(city_name){
		//Controls the input
		city_name = city_name.toLowerCase();
		
		//Checks if there is a possible connection
		var connection = node_connections[player.location][city_name];
		if(typeof connection === "undefined"){
			return false;
		}
		
		//Checks if the connection is active
		if(connection == false){
			return false;
		}
		
		//Change the player location
		player.location = city_name.toLowerCase();
		
		update();
		
		return true;
	}
	
	
	var buy_commodity = function(com_name){
		//Get the commodity name
		com_name = com_name.toLowerCase();
		
		//Get the city
		city = cities[player.location];
		
		//Get the price of the commodity
		var price = get_commodity_buy_price(com_name);
		
		//Checks if the player has enough gold
		if(price > player.gold){
		
			//Returns a failed buy
			return false;
			
		}
		
		//Change player gold
		player.gold -= price;
		
		//Change city gold
		city.gold += price;
		
		//Change player commodity count
		player.inventory[com_name].buy();
		//Change the city price accordingly
		city.sell(com_name);
		
		//Returns a successful buy
		return true;
	}
	
	var sell_commodity = function(com_name){
		//Get the commodity name
		com_name = com_name.toLowerCase();
		
		//Get the city
		city = cities[player.location];
		
		//Get the price of the commodity
		var price = get_commodity_sell_price(com_name)
		
		//Checks if the player has enough gold
		if(price > city.gold){
		
			//Returns a failed buy
			return false;
			
		}
		
		//Checks if the player has enough commodity
		if(player.inventory[com_name].count <= 0){
		
			//Returns a failed buy
			return false;
			
		}
		
		//Change player gold
		player.gold += price;
		
		//Change city gold
		city.gold -= price;
		
		//Change player commodity count
		player.inventory[com_name].sell();
		
		//Change the city price accordingly
		city.buy(com_name);
		
		//Returns a successful buy
		return true; 
	}
	
	var get_commodity_buy_price = function(com_name){
	
		//Doubles the sell commodity price
		return get_commodity_sell_price(com_name) * 2;
		
	}
	
	var get_commodity_sell_price = function(com_name){
		//Get the commodity name
		com_name = com_name.toLowerCase();
		
		//Get the city
		city = cities[player.location];
		
		//Return the price of the commodity
		return city.get_price(com_name) * commodities[com_name].price;
	}
	
	
	
	var get_year = function(){
		var tempYear = year;
		var yearString = "" + Math.abs(tempYear);
		if(year < 0){
			yearString += " BC";
		}else{
			yearString += " CE";
		}
		return yearString;
	}
	
	return{
		get_city_gold:function(){
			return "" + cities[player.location].gold + "g";
		},
		get_commodity_sell_price:function(com_name){
			return "" + get_commodity_sell_price(com_name) + "g";
		},
		get_commodity_buy_price:function(){
			var com_name = cities[player.location].commodity.name;
			return "" + get_commodity_buy_price(com_name) + "g";
		},
		get_player_city:function(){
			return player.location;
		},
		get_player_position:function(){
			return {"x":cities[player.location].x,"y":cities[player.location].y};
		},
		get_player_gold:function(){
			return "" + player.gold + " gold";
		},
		get_player_commodity_count:function(com_name){
			com_name = com_name.toLowerCase();
			return player.inventory[com_name].count;
		},
		player_buy_commodity:function(){
			var com_name = cities[player.location].commodity.name;
			return buy_commodity(com_name);
		},
		player_sell_commodity:function(com_name){
			return sell_commodity(com_name);
		},
		player_goto_city:function(city_name){
			return player_goto(city_name);
		},
		is_event:function(){
			return (typeof event[year] != "undefined");
		},
		get_year_int:function(){
			return year;
		},
		get_year:function(){
			return get_year();
		},
		get_event:function(){
			return event[year];
		}
		
	}
})();