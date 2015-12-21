function CurrentCityName(){
	RenderableObject.call(this);
	
	this.name = "CurrentCityName";
	this.color = "#FFF";
	
	this.text = {
	"text":"100 BC",
	"size":30,
	"font":"sarif",
	"text_align":"center"};
	
	this.x = 320;
	this.y = 70;
	this.z = 500;
	
	this.width = 500;
	this.height = 35;
	
	this.update = function(){
		//Sets the Text to the city name
		this.text["text"] = TheActualGame.get_player_city();
	}
}
CurrentCityName.prototype = new RenderableObject();
CurrentCityName.prototype.constructor = CurrentCityName;

function DateScroll(){
	RenderableObject.call(this);
	
	this.name = "DateScroll";
	
	this.x = 120;
	this.y = -20;
	this.z = 500;
	
	this.width = 400;
	this.height = 100;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/TimeDisplay.png"});

}
DateScroll.prototype = new RenderableObject();
DateScroll.prototype.constructor = DateScroll;


function DateScrollText(){
	RenderableObject.call(this);
	
	this.name = "DateScrollText";
	this.color = "#FFF";
	
	this.text = {
	"text":"100 BC",
	"size":20,
	"font":"sarif",
	"text_align":"right"};
	
	this.x = 355;
	this.y = 15;
	this.z = 500;
	
	this.width = 100;
	this.height = 35;
	this.update = function(){
		//Sets the text to the year
		this.text["text"] = TheActualGame.get_year();
	}
}
DateScrollText.prototype = new RenderableObject();
DateScrollText.prototype.constructor = DateScrollText;

function GoldButton(){
	RenderableObject.call(this);
	
	this.name = "Gold_Button";
	
	this.x = 0;
	this.y = 20;
	this.z = 500;
	
	this.width = 150;
	this.height = 35;

	//Images
	this.image_src.push({"key":"default","value":"buttons/ParchmentButtonGold.png"});

}
GoldButton.prototype = new RenderableObject();
GoldButton.prototype.constructor = GoldButton;

function GoldButtonText(){
	RenderableObject.call(this);
	
	this.name = "GoldButtonText";
	
	this.color = "#FFF";
	
	this.text = {
	"text":"500 gold",
	"size":20,
	"font":"sarif",
	"text_align":"right"};
	
	this.x = 135;
	this.y = 25;
	this.z = 500;
	
	this.width = 1000;
	this.height = 30;
	
	this.update = function(){
		this.text["text"] = TheActualGame.get_player_gold();
	}
}

GoldButtonText.prototype = new RenderableObject();
GoldButtonText.prototype.constructor = GoldButtonText;

function BuyButton(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "Buy_Button";
	
	
	this.x = 0;
	this.y = 155;
	this.z = 500;
	
	this.width = 64;
	this.height = 40;

	//Images
	this.image_src.push({"key":"default","value":"buttons/ParchmentButtonBuy.png"});
	this.image_src.push({"key":"onMouseEnter","value":"buttons/ParchmentButtonOverBuy.png"});
	
	//Sounds
	this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

	this.onClick = function(){
		//Buys the player 1 of the given commodity
		TheActualGame.player_buy_commodity();
	}
}
BuyButton.prototype = new InteractiveObject();
mixin(BuyButton,RenderableObject);
BuyButton.prototype.constructor = BuyButton;

function ExitButton(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "Exit_Button";
	
	this.x = 0;
	this.y = 245;
	this.z = 500;
	
	this.width = 64;
	this.height = 40;

	//Images
	this.image_src.push({"key":"default","value":"buttons/ParchmentButtonExit.png"});
	this.image_src.push({"key":"onMouseEnter","value":"buttons/ParchmentButtonOverExit.png"});
	
	//Sounds
	this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

	this.onClick = function(){
		//Goes back the the world screen
		this.parent.parent.goto_scene("world");
	}
}
ExitButton.prototype = new InteractiveObject();
mixin(ExitButton,RenderableObject);
ExitButton.prototype.constructor = ExitButton;

function CityCurrentGold(){
	RenderableObject.call(this);
	
	this.name = "CityCurrentGold";
	
	this.x = 130;
	this.y = 120;
	this.z = 500;
	
	this.width = 200;
	this.height = 167;

	//Images
	this.image_src.push({"key":"default","value":"buttons/GoldParchment.png"});

}
CityCurrentGold.prototype = new RenderableObject();
CityCurrentGold.prototype.constructor = CityCurrentGold;

function CurrentCityGoldText(){
	RenderableObject.call(this);
	
	this.name = "CurrentCityGoldText";
	this.color = "#000";
	this.text = {
	"text":"5000g",
	"size":35,
	"font":"sarif",
	"text_align":"center"};
	
	this.x = 240;
	this.y = 190;
	this.z = 500;
	
	this.width = 10000;
	this.height = 30;
	
	this.update = function(){
		//Sets the text to the city's gold
		this.text["text"] = "" + TheActualGame.get_city_gold();
	}
}
CurrentCityGoldText.prototype = new RenderableObject();
CurrentCityGoldText.prototype.constructor = CurrentCityGoldText;


function CityCommodity(){
	RenderableObject.call(this);
	
	this.name = "CityCommodity";
	
	this.x = 330;
	this.y = 120;
	this.z = 500;
	
	this.width = 200;
	this.height = 167;

	//Images
	this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});

}
CityCommodity.prototype = new RenderableObject();
CityCommodity.prototype.constructor = CityCommodity;

function JadeCommodity(){
	RenderableObject.call(this);
	
	this.name = "JadeCommodity";
	
	this.x = 380;
	this.y = 175;
	this.z = 500;
	
	this.width = 90;
	this.height = 90;

	//Images
	this.image_src.push({"key":"default","value":"commodities/Jade.png"});

}
JadeCommodity.prototype = new RenderableObject();
JadeCommodity.prototype.constructor = JadeCommodity;

function PotteryCommodity(){
	RenderableObject.call(this);
	
	this.name = "PotteryCommodity";
	
	this.x = 380;
	this.y = 175;
	this.z = 500;
	
	this.width = 90;
	this.height = 90;

	//Images
	this.image_src.push({"key":"default","value":"commodities/Pottery.png"});

}
PotteryCommodity.prototype = new RenderableObject();
PotteryCommodity.prototype.constructor = PotteryCommodity;

function HoneyCommodity(){
	
	RenderableObject.call(this);
	
	this.name = "HoneyCommodity";
	
	this.x = 380;
	this.y = 175;
	this.z = 500;
	
	this.width = 90;
	this.height = 90;

	//Images
	this.image_src.push({"key":"default","value":"commodities/Honey.png"});

}
HoneyCommodity.prototype = new RenderableObject();
HoneyCommodity.prototype.constructor = HoneyCommodity;

function GunpowderCommodity(){
	RenderableObject.call(this);
	
	this.name = "GunpowderCommodity";
	
	this.x = 380;
	this.y = 175;
	this.z = 500;
	
	this.width = 90;
	this.height = 90;

	//Images
	this.image_src.push({"key":"default","value":"commodities/Gunpowder.png"});

}
GunpowderCommodity.prototype = new RenderableObject();
GunpowderCommodity.prototype.constructor = GunpowderCommodity;

function CattleCommodity(){
	RenderableObject.call(this);
	
	this.name = "CattleCommodity";
	
	this.x = 380;
	this.y = 175;
	this.z = 500;
	
	this.width = 90;
	this.height = 90;

	//Images
	this.image_src.push({"key":"default","value":"commodities/Cattle.png"});

}
CattleCommodity.prototype = new RenderableObject();
CattleCommodity.prototype.constructor = CattleCommodity;

function HorsesCommodity(){

	RenderableObject.call(this);
	
	this.name = "HorsesCommodity";
	
	this.x = 380;
	this.y = 175;
	this.z = 500;
	
	this.width = 90;
	this.height = 90;

	//Images
	this.image_src.push({"key":"default","value":"commodities/Horses.png"});

}
HorsesCommodity.prototype = new RenderableObject();
HorsesCommodity.prototype.constructor = HorsesCommodity;

function LeatherCommodity(){
	RenderableObject.call(this);
	
	this.name = "LeatherCommodity";
	
	this.x = 380;
	this.y = 175;
	this.z = 500;
	
	this.width = 90;
	this.height = 90;

	//Images
	this.image_src.push({"key":"default","value":"commodities/Leather.png"});

}
LeatherCommodity.prototype = new RenderableObject();
LeatherCommodity.prototype.constructor = LeatherCommodity;

function FurCommodity(){
	RenderableObject.call(this);
	
	this.name = "FurCommodity";
	
	this.x = 380;
	this.y = 175;
	this.z = 500;
	
	this.width = 90;
	this.height = 90;

	//Images
	this.image_src.push({"key":"default","value":"commodities/Fur.png"});
}
FurCommodity.prototype = new RenderableObject();
FurCommodity.prototype.constructor = FurCommodity;

function CityCommodityPrices(){
	RenderableObject.call(this);
	
	this.name = "CityCommodityPrices";
	
	this.color = "#000";
	this.text = {
	"text":"30g",
	"size":"bold 15",
	"font":"sarif",
	"text_align":"center"};
	
	
	this.x = 480;
	this.y = 170;
	this.z = 500;
	
	this.width = 90;
	this.height = 30;

	//Images
	this.image_src.push({"key":"default","value":"commodities/Fur.png"});
	
	this.update = function(){
		//Sets the text to the commodity price
		this.text["text"] = "" + TheActualGame.get_commodity_buy_price();	
	}
}
CityCommodityPrices.prototype = new RenderableObject();
CityCommodityPrices.prototype.constructor = CityCommodityPrices;

function InventoryParchment(){
	RenderableObject.call(this);
	
	this.name = "InventoryParchment";
	
	this.x = 0;
	this.y = 380;
	this.z = 500;
	
	this.width = 640;
	this.height = 254;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/InventoryParchment.png"});

}
InventoryParchment.prototype = new RenderableObject();
InventoryParchment.prototype.constructor = InventoryParchment;

function InvSlot1(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "InvSlot1";
	
	this.x = 32;
	this.y = 423;
	this.z = 500;
	
	this.width = 50;
	this.height = 50;

	//Images
	this.image_src.push({"key":"default","value":"commodities/Jade.png"});

	this.onClick = function(){
		//Sells the jade commodity
		TheActualGame.player_sell_commodity("jade");
	}
}
InvSlot1.prototype = new InteractiveObject();
mixin(InvSlot1,RenderableObject);
InvSlot1.prototype.constructor = InvSlot1;

function InvSlot2(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "InvSlot2";
	
	this.x = 97;
	this.y = 423;
	this.z = 500;
	
	this.width = 50;
	this.height = 50;

	//Images
	this.image_src.push({"key":"default","value":"commodities/Pottery.png"});
	
	this.onClick = function(){
		//Sells the pottery commodity
		TheActualGame.player_sell_commodity("pottery");
	}

}
InvSlot2.prototype = new InteractiveObject();
mixin(InvSlot2,RenderableObject);
InvSlot2.prototype.constructor = InvSlot2;

function InvSlot3(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "InvSlot3";
	
	this.x = 162;
	this.y = 423;
	this.z = 500;
	
	this.width = 50;
	this.height = 50;

	//Images
	this.image_src.push({"key":"default","value":"commodities/Honey.png"});
	
	this.onClick = function(){
		//This sells the honey commodity
		TheActualGame.player_sell_commodity("honey");
	}

}
InvSlot3.prototype = new InteractiveObject();
mixin(InvSlot3,RenderableObject);
InvSlot3.prototype.constructor = InvSlot3;

function InvSlot4(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "InvSlot4";
	
	this.x = 227;
	this.y = 423;
	this.z = 500;
	
	this.width = 50;
	this.height = 50;

	//Images
	this.image_src.push({"key":"default","value":"commodities/Gunpowder.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	this.onClick = function(){
		//Sells the Gunpowder commodity
		TheActualGame.player_sell_commodity("gunpowder");
	}

}
InvSlot4.prototype = new InteractiveObject();
mixin(InvSlot4,RenderableObject);
InvSlot4.prototype.constructor = InvSlot4;

function InvSlot5(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "InvSlot5";
	
	this.x = 292;
	this.y = 423;
	this.z = 500;
	
	this.width = 50;
	this.height = 50;

	//Images
	this.image_src.push({"key":"default","value":"commodities/Cattle.png"});

	this.onClick = function(){
		//Sells the cattle commodity
		TheActualGame.player_sell_commodity("cattle");
	}
}
InvSlot5.prototype = new InteractiveObject();
mixin(InvSlot5,RenderableObject);
InvSlot5.prototype.constructor = InvSlot5;

function InvSlot6(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "InvSlot6";
	
	this.x = 357;
	this.y = 423;
	this.z = 500;
	
	this.width = 50;
	this.height = 50;

	//Images
	this.image_src.push({"key":"default","value":"commodities/Horses.png"});
	
	this.onClick = function(){
		//Sells the horses commodity
		TheActualGame.player_sell_commodity("horses");
	}
}
InvSlot6.prototype = new InteractiveObject();
mixin(InvSlot6,RenderableObject);
InvSlot6.prototype.constructor = InvSlot6;

function InvSlot7(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "InvSlot7";
	
	this.x = 422;
	this.y = 423;
	this.z = 500;
	
	this.width = 50;
	this.height = 50;

	//Images
	this.image_src.push({"key":"default","value":"commodities/Leather.png"});

	this.onClick = function(){
		//Sells the leather commodity
		TheActualGame.player_sell_commodity("leather");
	}
}
InvSlot7.prototype = new InteractiveObject();
mixin(InvSlot7,RenderableObject);
InvSlot7.prototype.constructor = InvSlot7;

function InvSlot8(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "InvSlot8";
	
	this.x = 487;
	this.y = 423;
	this.z = 500;
	
	this.width = 50;
	this.height = 50;

	//Images
	this.image_src.push({"key":"default","value":"commodities/Fur.png"});
	
	this.onClick = function(){
		//Sells the fur commodity
		TheActualGame.player_sell_commodity("fur");
	}
}
InvSlot8.prototype = new InteractiveObject();
mixin(InvSlot8,RenderableObject);
InvSlot8.prototype.constructor = InvSlot8;

function InvSlot1Price(){
	RenderableObject.call(this);
	
	this.name = "InvSlot1Price";
	this.color = "#000";
	this.text = {
	"text":"60g",
	"size":"bold 15",
	"font":"sarif",
	"text_align":"center"};
	
	this.x = 59;
	this.y = 423;
	this.z = 500;
	
	this.width = 50;
	this.height = 20;
	
	this.update = function(){
		//Sets the text to the commodity sell price
		this.text["text"] = TheActualGame.get_commodity_sell_price("jade");
	}
}
InvSlot1Price.prototype = new RenderableObject();
InvSlot1Price.prototype.constructor = InvSlot1Price;

function InvSlot2Price(){
	RenderableObject.call(this);
	
	this.name = "InvSlot2Price";
	
	this.color = "#000";
	this.text = {
	"text":"70g",
	"size":"bold 15",
	"font":"sarif",
	"text_align":"center"};
	
	this.x = 124;
	this.y = 423;
	this.z = 500;
	
	this.width = 50;
	this.height = 20;

	this.update = function(){
		//Sets the text to the commodity sell price
		this.text["text"] = TheActualGame.get_commodity_sell_price("pottery");
		
	}

}
InvSlot2Price.prototype = new RenderableObject();
InvSlot2Price.prototype.constructor = InvSlot2Price;

function InvSlot3Price(){
	RenderableObject.call(this);
	
	this.name = "InvSlot3Price";
	this.color = "#000";
	this.text = {
	"text":"70g",
	"size":"bold 15",
	"font":"sarif",
	"text_align":"center"};
	
	this.x = 189;
	this.y = 423;
	this.z = 500;
	
	this.width = 50;
	this.height = 20;

	this.update = function(){
		//Sets the text to the commodity sell price
		this.text["text"] = TheActualGame.get_commodity_sell_price("honey");
	}
}
InvSlot3Price.prototype = new RenderableObject();
InvSlot3Price.prototype.constructor = InvSlot3Price;


function InvSlot4Price(){
	RenderableObject.call(this);
	
	this.name = "InvSlot4Price";
	this.color = "#000";
	this.text = {
	"text":"70g",
	"size":"bold 15",
	"font":"sarif",
	"text_align":"center"};
	this.x = 254;
	this.y = 423;
	this.z = 500;
	
	this.width = 50;
	this.height = 20;

	this.update = function(){
		//Sets the text to the commodity sell price
		this.text["text"] = TheActualGame.get_commodity_sell_price("gunpowder");
	}
}
InvSlot4Price.prototype = new RenderableObject();
InvSlot4.prototype.constructor = InvSlot4Price;

function InvSlot5Price(){
	RenderableObject.call(this);
	
	this.name = "InvSlot5Price";
	this.color = "#000";
	this.text = {
	"text":"70g",
	"size":"bold 15",
	"font":"sarif",
	"text_align":"center"};
	this.x = 320;
	this.y = 423;
	this.z = 500;
	
	this.width = 50;
	this.height = 20;

	this.update = function(){
		//Sets the text to the commodity sell price
		this.text["text"] = TheActualGame.get_commodity_sell_price("cattle");
		
	}
}
InvSlot5Price.prototype = new RenderableObject();
InvSlot5Price.prototype.constructor = InvSlot5Price;

function InvSlot6Price(){
	RenderableObject.call(this);
	
	this.name = "InvSlot6Price";
	this.color = "#000";
	this.text = {
	"text":"70g",
	"size":"bold 15",
	"font":"sarif",
	"text_align":"center"};
	this.x = 385;
	this.y = 423;
	this.z = 500;
	
	this.width = 50;
	this.height = 20;

	this.update = function(){
		//Sets the text to the commodity sel price
		this.text["text"] = TheActualGame.get_commodity_sell_price("horses");
	}
}
InvSlot6Price.prototype = new RenderableObject();
InvSlot6Price.prototype.constructor = InvSlot6Price;

function InvSlot7Price(){
	RenderableObject.call(this);
	
	this.name = "InvSlot7Price";
	this.color = "#000";
	this.text = {
	"text":"70g",
	"size":"bold 15",
	"font":"sarif",
	"text_align":"center"};
	this.x = 450;
	this.y = 423;
	this.z = 500;
	
	this.width = 50;
	this.height = 20;

	this.update = function(){
		//Sets the text to the commodity sell price
		this.text["text"] = TheActualGame.get_commodity_sell_price("leather");
		
	}
}
InvSlot7Price.prototype = new RenderableObject();
InvSlot7Price.prototype.constructor = InvSlot7Price;

function InvSlot8Price(){
	RenderableObject.call(this);
	
	this.name = "InvSlot8Price";
	this.color = "#000";
	this.text = {
	"text":"70g",
	"size":"bold 15",
	"font":"sarif",
	"text_align":"center"};
	this.x = 515;
	this.y = 423;
	this.z = 500;
	
	this.width = 50;
	this.height = 20;

	this.update = function(){
		//Sets the text to the commodity sell price
		this.text["text"] = TheActualGame.get_commodity_sell_price("fur");
	}
}
InvSlot8Price.prototype = new RenderableObject();
InvSlot8Price.prototype.constructor = InvSlot8Price;


function InvSlot1NumberOf(){
	RenderableObject.call(this);
	
	this.name = "InvSlot1NumberOf";
	this.color = "#000";
	this.text = {
	"text":"01",
	"size":"bold 15",
	"font":"sarif",
	"text_align":"right"};
	this.x = 85;
	this.y = 453;
	this.z = 500;
	
	this.width = 50;
	this.height = 20;

	this.update = function(){
		//Sets the text to the commodity count
		this.text["text"] = "" + TheActualGame.get_player_commodity_count("jade");
	}
}
InvSlot1NumberOf.prototype = new RenderableObject();
InvSlot1NumberOf.prototype.constructor = InvSlot1NumberOf;

function InvSlot2NumberOf(){
	RenderableObject.call(this);
	
	this.name = "InvSlot2NumberOf";
	this.color = "#000";
	this.text = {
	"text":"02",
	"size":"bold 15",
	"font":"sarif",
	"text_align":"right"};
	this.x = 150;
	this.y = 453;
	this.z = 500;
	
	this.width = 50;
	this.height = 20;

	this.update = function(){
		//Sets the text to the commodity count
		this.text["text"] = "" + TheActualGame.get_player_commodity_count("pottery");
	}
}
InvSlot2NumberOf.prototype = new RenderableObject();
InvSlot2NumberOf.prototype.constructor = InvSlot2NumberOf;

function InvSlot3NumberOf(){
	RenderableObject.call(this);
	
	this.name = "InvSlot3NumberOf";
	this.color = "#000";
	this.text = {
	"text":"03",
	"size":"bold 15",
	"font":"sarif",
	"text_align":"right"};
	this.x = 215;
	this.y = 453;
	this.z = 500;
	
	this.width = 50;
	this.height = 20;

	this.update = function(){
		//Sets the text to the commodity count
		this.text["text"] = "" + TheActualGame.get_player_commodity_count("honey");
	}
}
InvSlot3NumberOf.prototype = new RenderableObject();
InvSlot3NumberOf.prototype.constructor = InvSlot3NumberOf;

function InvSlot4NumberOf(){
	RenderableObject.call(this);
	
	this.name = "InvSlot4NumberOf";
	this.color = "#000";
	this.text = {
	"text":"03",
	"size":"bold 15",
	"font":"sarif",
	"text_align":"right"};
	this.x = 280;
	this.y = 453;
	this.z = 500;
	
	this.width = 50;
	this.height = 20;

	this.update = function(){
		//Sets the text to the commodity count
		this.text["text"] = "" + TheActualGame.get_player_commodity_count("gunpowder");
	}
}
InvSlot4NumberOf.prototype = new RenderableObject();
InvSlot4.prototype.constructor = InvSlot4NumberOf;

function InvSlot5NumberOf(){
	RenderableObject.call(this);
	
	this.name = "InvSlot5NumberOf";
	this.color = "#000";
	this.text = {
	"text":"03",
	"size":"bold 15",
	"font":"sarif",
	"text_align":"right"};
	this.x = 345;
	this.y = 453;
	this.z = 500;
	
	this.width = 50;
	this.height = 20;

	this.update = function(){
		//Sets the text to the commodity count
		this.text["text"] = "" + TheActualGame.get_player_commodity_count("cattle");
	}
}
InvSlot5NumberOf.prototype = new RenderableObject();
InvSlot5NumberOf.prototype.constructor = InvSlot5NumberOf;

function InvSlot6NumberOf(){
	RenderableObject.call(this);
	
	this.name = "InvSlot6NumberOf";
	this.color = "#000";
	this.text = {
	"text":"03",
	"size":"bold 15",
	"font":"sarif",
	"text_align":"right"};
	this.x = 410;
	this.y = 453;
	this.z = 500;
	
	this.width = 50;
	this.height = 20;
	
	this.update = function(){
		//Sets the text to the commodity count
		this.text["text"] = "" + TheActualGame.get_player_commodity_count("horses");
	}
}
InvSlot6NumberOf.prototype = new RenderableObject();
InvSlot6NumberOf.prototype.constructor = InvSlot6NumberOf;

function InvSlot7NumberOf(){
	RenderableObject.call(this);
	
	this.name = "InvSlot7NumberOf";
	this.color = "#000";
	this.text = {
	"text":"03",
	"size":"bold 15",
	"font":"sarif",
	"text_align":"right"};
	this.x = 475;
	this.y = 453;
	this.z = 500;
	
	this.width = 50;
	this.height = 20;

	this.update = function(){
		//Sets the text to the commodity count
		this.text["text"] = "" + TheActualGame.get_player_commodity_count("leather");
	}
}
InvSlot7NumberOf.prototype = new RenderableObject();
InvSlot7NumberOf.prototype.constructor = InvSlot7NumberOf;

function InvSlot8NumberOf(){
	RenderableObject.call(this);
	
	this.name = "InvSlot8NumberOf";
	this.color = "#000";
	this.text = {
	"text":"03",
	"size":"bold 15",
	"font":"sarif",
	"text_align":"right"};
	this.x = 540;
	this.y = 453;
	this.z = 500;
	
	this.width = 50;
	this.height = 20;

	this.update = function(){
		//Set the text to the commodity count
		this.text["text"] = "" + TheActualGame.get_player_commodity_count("fur");
	}
}
InvSlot8NumberOf.prototype = new RenderableObject();
InvSlot8NumberOf.prototype.constructor = InvSlot8NumberOf;

function WorldBackground(){
	RenderableObject.call(this);
	
	this.name = "WorldBackground";
	
	//Dimensions
	this.width = 640;
	this.height = 480;
	
	this.image_src.push({"key":"default","value":"backgrounds/WorldBackground.png"});
	
}
WorldBackground.prototype = new RenderableObject();
WorldBackground.prototype.constructor = WorldBackground;

function HanoiBackground(){
	RenderableObject.call(this);
	
	this.name = "HanoiBackground";
	
	//Dimensions
	this.width = 640;
	this.height = 480;
	
	
	this.image_src.push({"key":"default","value":"backgrounds/HanoiBackground.jpg"});
	
}
HanoiBackground.prototype = new RenderableObject();
HanoiBackground.prototype.constructor = HanoiBackground;

function TestMusic(){
	InteractiveObject.call(this);
	
	this.name = "City_Music";

	//Music
	this.sound_src.push({"key":"ambient","value":"testScene/music.mp3","loop":true,"volume":0.1});
}
TestMusic.prototype = new InteractiveObject();
TestMusic.prototype.constructor = TestMusic;

TestMusic.prototype.update = function(){
	//Plays the music once it loads
	if(typeof this.sound["ambient"] !== "undefined"){
		if(this.sound["ambient"].paused == true){
			this.sound["ambient"].play();
		}
	}
}


function EnterCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "EnterCity";

	this.x = 285;
	this.y = 60;
	this.z = 500;
	
	this.width = 75;
	this.height = 75;

	//Images
	this.image_src.push({"key":"default","value":"buttons/ParchmentButtonEnterCity.png"});
	this.image_src.push({"key":"onMouseEnter","value":"buttons/ParchmentButtonEnterCityOver.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

	this.onClick = function(){
		//Enters the current city
		this.parent.parent.goto_scene(TheActualGame.get_player_city());
	}
}
EnterCity.prototype = new InteractiveObject();
mixin(EnterCity,RenderableObject);
EnterCity.prototype.constructor = EnterCity;

function EnterCityName(){
	RenderableObject.call(this);
	
	this.name = "EnterCityName";
	
	this.text = {
	"text":"name",
	"size":20,
	"font":"sarif",
	"text_align":"center"};
	
	this.x = 325;
	this.y = 95;
	this.z = 500;
	
	this.width = 65;
	this.height = 100;

	this.update = function() {
		//Sets the text to the current city name
		this.text["text"] = TheActualGame.get_player_city();
	}
}
EnterCityName.prototype = new RenderableObject();
EnterCityName.prototype.constructor = EnterCityName;

//City Locations
function HanoiCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "HanoiCity";
	
	this.x = 508;
	this.y = 275;
	this.z = 500;
	
	this.width = 16;
	this.height = 16;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"closed","value":"backgrounds/Bad_Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});
	
	this.onClick = function(){
		//Goes to the city if possible
		TheActualGame.player_goto_city("hanoi");
	}
	this.update = function(){
		//Goes to the city if possible
		if(TheActualGame.get_city_trading("hanoi")){
			this.image_state = "default";
		}else{
			this.image_state = "closed";
		}
	}
}
HanoiCity.prototype = new InteractiveObject();
mixin(HanoiCity,RenderableObject);
HanoiCity.prototype.constructor = HanoiCity;

function ChittagongCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "ChittagongCity";
	
	this.x = 435;
	this.y = 265;
	this.z = 500;
	
	this.width = 16;
	this.height = 16;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"closed","value":"backgrounds/Bad_Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

	this.onClick = function(){
		//Goes to the city if possible
		TheActualGame.player_goto_city("chittagong");
	}
	this.update = function(){
		//Goes to the city if possible
		if(TheActualGame.get_city_trading("chittagong")){
			this.image_state = "default";
		}else{
			this.image_state = "closed";
		}
	}
}
ChittagongCity.prototype = new InteractiveObject();
mixin(ChittagongCity,RenderableObject);
ChittagongCity.prototype.constructor = ChittagongCity;

function MadrasCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "MadrasCity";
	
	this.x = 388;
	this.y = 305;
	this.z = 500;
	
	this.width = 16;
	this.height = 16;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"closed","value":"backgrounds/Bad_Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

	this.onClick = function(){
		//Goes to the city if possible
		TheActualGame.player_goto_city("madras");
	}
	this.update = function(){
		//Goes to the city if possible
		if(TheActualGame.get_city_trading("madras")){
			this.image_state = "default";
		}else{
			this.image_state = "closed";
		}
	}
}
MadrasCity.prototype = new InteractiveObject();
mixin(MadrasCity,RenderableObject);
MadrasCity.prototype.constructor = MadrasCity;

function ColomboCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "ColomboCity";
	
	this.x = 393;
	this.y = 335;
	this.z = 500;
	
	this.width = 16;
	this.height = 16;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"closed","value":"backgrounds/Bad_Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

	this.onClick = function(){
		//Goes to the city if possible
		TheActualGame.player_goto_city("colombo");
	}
	this.update = function(){
		//Goes to the city if possible
		if(TheActualGame.get_city_trading("colombo")){
			this.image_state = "default";
		}else{
			this.image_state = "closed";
		}
	}
}
ColomboCity.prototype = new InteractiveObject();
mixin(ColomboCity,RenderableObject);
ColomboCity.prototype.constructor = ColomboCity;

function DebalCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "DebalCity";
	
	this.x = 340;
	this.y = 262;
	this.z = 500;
	
	this.width = 16;
	this.height = 16;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"closed","value":"backgrounds/Bad_Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

	this.onClick = function(){
		//Goes to the city if possible
		TheActualGame.player_goto_city("debal");
	}
	this.update = function(){
		//Goes to the city if possible
		if(TheActualGame.get_city_trading("debal")){
			this.image_state = "default";
		}else{
			this.image_state = "closed";
		}
	}
}
DebalCity.prototype = new InteractiveObject();
mixin(DebalCity,RenderableObject);
DebalCity.prototype.constructor = DebalCity;

function YemenCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "YemenCity";
	
	this.x = 260;
	this.y = 303;
	this.z = 500;
	
	this.width = 16;
	this.height = 16;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"closed","value":"backgrounds/Bad_Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});
	
	this.onClick = function(){
		//Goes to the city if possible
		TheActualGame.player_goto_city("aden");
	}

	this.update = function(){
		//Goes to the city if possible
		if(TheActualGame.get_city_trading("aden")){
			this.image_state = "default";
		}else{
			this.image_state = "closed";
		}
	}
}
YemenCity.prototype = new InteractiveObject();
mixin(YemenCity,RenderableObject);
YemenCity.prototype.constructor = YemenCity;

function SuezCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "SuezCity";
	
	this.x = 208;
	this.y = 237;
	this.z = 500;
	
	this.width = 16;
	this.height = 16;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"closed","value":"backgrounds/Bad_Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});
	
	this.onClick = function(){
		//Goes to the city if possible
		TheActualGame.player_goto_city("suez");
	}
	this.update = function(){
		//Goes to the city if possible
		if(TheActualGame.get_city_trading("suez")){
			this.image_state = "default";
		}else{
			this.image_state = "closed";
		}
	}

}
SuezCity.prototype = new InteractiveObject();
mixin(SuezCity,RenderableObject);
SuezCity.prototype.constructor = SuezCity;

function AstrakhamCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "AstrakhamCity";
	
	this.x = 220;
	this.y = 138;
	this.z = 500;
	
	this.width = 16;
	this.height = 16;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"closed","value":"backgrounds/Bad_Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

	this.onClick = function(){
		//Goes to the city if possible
		TheActualGame.player_goto_city("moscow");
	}
	this.update = function(){
		//Goes to the city if possible
		if(TheActualGame.get_city_trading("moscow")){
			this.image_state = "default";
		}else{
			this.image_state = "closed";
		}
	}
}
AstrakhamCity.prototype = new InteractiveObject();
mixin(AstrakhamCity,RenderableObject);
AstrakhamCity.prototype.constructor = AstrakhamCity;

function ConstantinopleCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "ConstantinopleCity";
	
	this.x = 190;
	this.y = 195;
	this.z = 500;
	
	this.width = 16;
	this.height = 16;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"closed","value":"backgrounds/Bad_Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});
	
	this.onClick = function(){
		//Goes to the city if possible
		TheActualGame.player_goto_city("constantinople");
	}
	this.update = function(){
		//Goes to the city if possible
		if(TheActualGame.get_city_trading("constantinople")){
			this.image_state = "default";
		}else{
			this.image_state = "closed";
		}
	}
}
ConstantinopleCity.prototype = new InteractiveObject();
mixin(ConstantinopleCity,RenderableObject);
ConstantinopleCity.prototype.constructor = ConstantinopleCity;

function VeniceCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "VeniceCity";
	
	this.x = 115;
	this.y = 178;
	this.z = 500;
	
	this.width = 16;
	this.height = 16;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"closed","value":"backgrounds/Bad_Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});
	
	this.onClick = function(){
		//Goes to the city if possible
		TheActualGame.player_goto_city("venice");
	}
	this.update = function(){
		//Goes to the city if possible
		if(TheActualGame.get_city_trading("venice")){
			this.image_state = "default";
		}else{
			this.image_state = "closed";
		}
	}
}
VeniceCity.prototype = new InteractiveObject();
mixin(VeniceCity,RenderableObject);
VeniceCity.prototype.constructor = VeniceCity;

function EndGameBackground(){
	RenderableObject.call(this);
	
	this.name = "EndGameBackground";
	
	//Dimensions
	this.width = 640;
	this.height = 480;
	
	this.image_src.push({"key":"default","value":"backgrounds/FinalScreen.png"});
	
}
EndGameBackground.prototype = new RenderableObject();
EndGameBackground.prototype.constructor = EndGameBackground;

function FinalGold(){
	RenderableObject.call(this);
	
	this.name = "FinalGold";
	this.color = "#000";
	
	this.text = {
	"text":"500g",
	"size":30,
	"font":"serif",
	"text_align":"Left"};
	
	this.x = 380;
	this.y = 293;
	this.z = 500;
	
	this.width = 500;
	this.height = 35;
	
	this.update = function(){
		this.text["text"] = TheActualGame.get_final_gold();
		
	}
}
FinalGold.prototype = new RenderableObject();
FinalGold.prototype.constructor = FinalGold;



//City Background Images
function ChittagongBackground(){
	RenderableObject.call(this);
	
	this.name = "ChittagongBackground";
	
	//Dimensions
	this.width = 640;
	this.height = 480;
	
	this.image_src.push({"key":"default","value":"backgrounds/ChittagongBackground.jpg"});
	
}
ChittagongBackground.prototype = new RenderableObject();
ChittagongBackground.prototype.constructor = ChittagongBackground;

function SuezBackground(){
	RenderableObject.call(this);
	
	this.name = "SuezBackground";
	
	//Dimensions
	this.width = 640;
	this.height = 480;
	
	this.image_src.push({"key":"default","value":"backgrounds/SuezBackground.jpg"});
	
}
SuezBackground.prototype = new RenderableObject();
SuezBackground.prototype.constructor = SuezBackground;

function MadrasBackground(){
	RenderableObject.call(this);
	
	this.name = "MadrasBackground";
	
	//Dimensions
	this.width = 640;
	this.height = 480;
	
	this.image_src.push({"key":"default","value":"backgrounds/MadrasBackground.jpg"});
	
}
MadrasBackground.prototype = new RenderableObject();
MadrasBackground.prototype.constructor = MadrasBackground

function VeniceBackground(){
	RenderableObject.call(this);
	
	this.name = "VeniceBackground";
	
	//Dimensions
	this.width = 640;
	this.height = 480;
	
	this.image_src.push({"key":"default","value":"backgrounds/VeniceBackground.jpg"});
	
}
VeniceBackground.prototype = new RenderableObject();
VeniceBackground.prototype.constructor = VeniceBackground

function DebalBackground(){
	RenderableObject.call(this);
	
	this.name = "DebalBackground";
	
	//Dimensions
	this.width = 640;
	this.height = 480;
	
	this.image_src.push({"key":"default","value":"backgrounds/DebalBackground.jpg"});
	
}
DebalBackground.prototype = new RenderableObject();
DebalBackground.prototype.constructor = DebalBackground

function AstrakhamBackground(){
	RenderableObject.call(this);
	
	this.name = "AstrakhamBackground";
	
	//Dimensions
	this.width = 640;
	this.height = 480;
	
	this.image_src.push({"key":"default","value":"backgrounds/MoscowBackground.jpg"});
	
}
AstrakhamBackground.prototype = new RenderableObject();
AstrakhamBackground.prototype.constructor = AstrakhamBackground

function ColomboBackground(){
	RenderableObject.call(this);
	
	this.name = "ColomboBackground";
	
	//Dimensions
	this.width = 640;
	this.height = 480;
	
	this.image_src.push({"key":"default","value":"backgrounds/ColomboBackground.jpg"});
	
}
ColomboBackground.prototype = new RenderableObject();
ColomboBackground.prototype.constructor = ColomboBackground

function ConstantinopleBackground(){
	RenderableObject.call(this);
	
	this.name = "ConstantinopleBackground";
	
	//Dimensions
	this.width = 640;
	this.height = 480;
	
	this.image_src.push({"key":"default","value":"backgrounds/ConstantinopleBackground.jpg"});
	
}
ConstantinopleBackground.prototype = new RenderableObject();
ConstantinopleBackground.prototype.constructor = ConstantinopleBackground



function AdenBackground(){
	RenderableObject.call(this);
	
	this.name = "AdenBackground";
	
	//Dimensions
	this.width = 640;
	this.height = 480;
	
	this.image_src.push({"key":"default","value":"backgrounds/AdenBackground.jpg"});
	
}
AdenBackground.prototype = new RenderableObject();
AdenBackground.prototype.constructor = AdenBackground

function YearWatcher(){	
	this.name = "YearWatcher";
	this.update = function() {
		var year = TheActualGame.get_year_int();
		if(year >  450){
			this.parent.parent.goto_scene("end");
		}
	}
}
EnterCityName.prototype.constructor = EnterCityName;