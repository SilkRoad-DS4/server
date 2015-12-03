var TheActualGame = (function(){
	
	var starting_year = -130;
	var year = -130;
	var events = 
	var commodities = {
		"jade": new Commodity("jade",500),
		"pottery": new Commodity("pottery",500),
		"honey": new Commodity("honey",500),
		"gunpowder": new Commodity("gunpowder",500),
		"cattle": new Commodity("cattle",500),
		"horses": new Commodity("horses",500),
		"leather": new Commodity("leather",500),
		"fur": new Commodity("fur",500)
	};
	var cities = {
		"aden": new City(
			200,
			commodities["horses"],
			{
				"jade":0,
				"pottery":0,
				"honey":0,
				"gunpowder":0,
				"cattle":0,
				"horses":0,
				"leather":0,
				"fur":0
			}),
		"chittagong": new City(
			200,
			commodities["pottery"],
			{
				"jade":0,
				"pottery":0,
				"honey":0,
				"gunpowder":0,
				"cattle":0,
				"horses":0,
				"leather":0,
				"fur":0
			}),
		"colombo": new City(
			200,
			commodities["gunpowder"],
			{
				"jade":0,
				"pottery":0,
				"honey":0,
				"gunpowder":0,
				"cattle":0,
				"horses":0,
				"leather":0,
				"fur":0
			}),
		"constantinople": new City(
			200,
			commodities["pottery"],
			{
				"jade":0,
				"pottery":0,
				"honey":0,
				"gunpowder":0,
				"cattle":0,
				"horses":0,
				"leather":0,
				"fur":0
			}),
		"debal": new City(
			200,
			commodities["cattle"],
			{
				"jade":0,
				"pottery":0,
				"honey":0,
				"gunpowder":0,
				"cattle":0,
				"horses":0,
				"leather":0,
				"fur":0
			}),
		"hanoi": new City(
			200,
			commodities["jade"],
			{
				"jade":0,
				"pottery":0,
				"honey":0,
				"gunpowder":0,
				"cattle":0,
				"horses":0,
				"leather":0,
				"fur":0
			}),
		"madras": new City(
			200,
			commodities["honey"],
			{
				"jade":0,
				"pottery":0,
				"honey":0,
				"gunpowder":0,
				"cattle":0,
				"horses":0,
				"leather":0,
				"fur":0
			}),
		"moscow": new City(
			200,
			commodities["fur"],
			{
				"jade":0,
				"pottery":0,
				"honey":0,
				"gunpowder":0,
				"cattle":0,
				"horses":0,
				"leather":0,
				"fur":0
			}),
		"suez": new City(
			200,
			commodities["leather"],
			{
				"jade":0,
				"pottery":0,
				"honey":0,
				"gunpowder":0,
				"cattle":0,
				"horses":0,
				"leather":0,
				"fur":0
			}),
		"venice": new City(
			200,
			commodities["horses"],
			{
				"jade":0,
				"pottery":0,
				"honey":0,
				"gunpowder":0,
				"cattle":0,
				"horses":0,
				"leather":0,
				"fur":0
			}),
	}
	var node_connections ={
		"aden":{
			"debal":true,
			"madras":true,
			"suez":true		
		},
		"chittagong"{
			"colombo":true,
			"debal":true,
			"hanoi":true
		},
		"colombo"{
			"chittagong":true,
			"madras":true
		},
		"constantinople"{
			"suez":true,
			"venice":true
		},
		"debal"{
			"aden":true,
			"hanoi":true,
			"moscow":true
		},
		"hanoi"{
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
		for(city of cities){
			city.update();
		}
		
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
		
		return true;
	}
	
	
	var buy_commodity(com_name){
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
		player.commodity[com_name].buy();
		
		//Change the city price accordingly
		city.sell(com_name);
		
		//Returns a successful buy
		return true;
	}
	
	var sell_commodity(com_name){
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
		
		//Change player gold
		player.gold += price;
		
		//Change city gold
		city.gold -= price;
		
		//Change player commodity count
		player.commodity[com_name].sell();
		
		//Change the city price accordingly
		city.buy(com_name);
		
		//Returns a successful buy
		return true; 
	}
	
	var get_commodity_buy_price(com_name){
	
		//Doubles the sell commodity price
		return get_commodity_sell_price(com_name) * 2;
		
	}
	
	var get_commodity_sell_price(com_name){
		//Get the commodity name
		com_name = com_name.toLowerCase();
		
		//Get the city
		city = cities[player.location];
		
		//Return the price of the commodity
		return city.get_price(com_name) * commodity[com_name].price;
	}
	
	
	
	var get_year = function(){
		var tempYear = year;
		var yearString = "" + Math.abs(tempYear);
		if(year < 0){
			yearString += "BC";
		}else{
			yearString += "AD";
		}
		return yearString;
	}
	
	return{
		get_player_city:function(){
			return player.location;
		},
		get_player_commodity_count:function(com_name){
			com_name = com_name.toLowerCase();
			return player.commodities[com_name].count;
		}
		player_goto_city:function(city_name){
			player_goto(city_name);
		},
		get_year:function(){
			return get_year();
		}
		
	}
})();