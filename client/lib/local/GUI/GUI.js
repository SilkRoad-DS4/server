function CurrentCityName(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"backgrounds/TimeDisplay.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/TimeDisplay.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
CurrentCityName.prototype = new InteractiveObject();
mixin(CurrentCityName,RenderableObject);
CurrentCityName.prototype.constructor = CurrentCityName;

CurrentCityName.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

CurrentCityName.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = TheActualGame.get_player_city();
}

CurrentCityName.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

CurrentCityName.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

CurrentCityName.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function TestButton(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "Test_Button";
	
	this.x = 64;
	this.y = 64;
	this.z = 500;
	
	this.width = 64;
	this.height = 64;

	//Text
	this.text = {
	"text":"Hello. My name is Inigo Montoya. You killed my father. Prepare to die.",
	"size":12,
	"font":"arial",
	"text_align":"right"};
	
	//Images
	this.image_src.push({"key":"default","value":"buttons/testButton.png"});
	this.image_src.push({"key":"onMouseEnter","value":"buttons/testButtonOver.png"});
	
	//Sounds
	this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
TestButton.prototype = new InteractiveObject();
mixin(TestButton,RenderableObject);
TestButton.prototype.constructor = TestButton;

TestButton.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

TestButton.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

TestButton.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

TestButton.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function TestBackground(){
	RenderableObject.call(this);
	
	this.name = "Test_Background";
	
	//Dimensions
	this.width = 640;
	this.height = 480;
	
	
	this.image_src.push({"key":"default","value":"backgrounds/test_wallpaper.jpg"});
	
}
TestBackground.prototype = new RenderableObject();
TestBackground.prototype.constructor = TestBackground;

function DateScroll(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "DateScroll";
	
	this.x = 120;
	this.y = -20;
	this.z = 500;
	
	this.width = 400;
	this.height = 100;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/TimeDisplay.png"});
	this.image_src.push({"key":"onMouseEnter","value":"backgrounds/TimeDisplay.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
DateScroll.prototype = new InteractiveObject();
mixin(DateScroll,RenderableObject);
DateScroll.prototype.constructor = DateScroll;

DateScroll.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

DateScroll.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

DateScroll.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

DateScroll.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}


function DateScrollText(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"backgrounds/TimeDisplay.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/TimeDisplay.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
DateScrollText.prototype = new InteractiveObject();
mixin(DateScrollText,RenderableObject);
DateScrollText.prototype.constructor = DateScrollText;

DateScrollText.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

DateScrollText.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = TheActualGame.get_year();
}

DateScrollText.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

DateScrollText.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

DateScrollText.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}


function GoldButton(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "Gold_Button";
	
	this.x = 0;
	this.y = 20;
	this.z = 500;
	
	this.width = 150;
	this.height = 35;

	//Images
	this.image_src.push({"key":"default","value":"buttons/ParchmentButtonGold.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/ParchmentButtonOver.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
GoldButton.prototype = new InteractiveObject();
mixin(GoldButton,RenderableObject);
GoldButton.prototype.constructor = GoldButton;

GoldButton.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

GoldButton.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

GoldButton.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

GoldButton.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function GoldButtonText(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"backgrounds/TimeDisplay.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/TimeDisplay.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
GoldButtonText.prototype = new InteractiveObject();
mixin(GoldButtonText,RenderableObject);
GoldButtonText.prototype.constructor = GoldButtonText;

GoldButtonText.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

GoldButtonText.prototype.update = function(){
	this.text["text"] = TheActualGame.get_player_gold();
}

GoldButtonText.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

GoldButtonText.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

GoldButtonText.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}


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

}
BuyButton.prototype = new InteractiveObject();
mixin(BuyButton,RenderableObject);
BuyButton.prototype.constructor = BuyButton;

BuyButton.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_buy_commodity();
}

BuyButton.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

BuyButton.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

BuyButton.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function SellButton(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "Sell_Button";
	
	this.x = 0;
	this.y = 200;
	this.z = 500;
	
	this.width = 64;
	this.height = 40;

	//Images
	this.image_src.push({"key":"default","value":"buttons/ParchmentButtonSell.png"});
	this.image_src.push({"key":"onMouseEnter","value":"buttons/ParchmentButtonOverSell.png"});
	
	//Sounds
	this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
SellButton.prototype = new InteractiveObject();
mixin(SellButton,RenderableObject);
SellButton.prototype.constructor = SellButton;

SellButton.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

SellButton.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

SellButton.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

SellButton.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

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

}
ExitButton.prototype = new InteractiveObject();
mixin(ExitButton,RenderableObject);
ExitButton.prototype.constructor = ExitButton;

ExitButton.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.parent.parent.goto_scene("world");
}

ExitButton.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

ExitButton.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

ExitButton.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function SettingsButton(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "Settings_Button";
	
	this.x = 560;
	this.y = 0;
	this.z = 500;
	
	this.width = 75;
	this.height = 50;

	//Images
	this.image_src.push({"key":"default","value":"buttons/ParchmentButtonSettings.png"});
	this.image_src.push({"key":"onMouseEnter","value":"buttons/ParchmentButtonOverSettings.png"});
	
	//Sounds
	this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
SettingsButton.prototype = new InteractiveObject();
mixin(SettingsButton,RenderableObject);
SettingsButton.prototype.constructor = SettingsButton;

SettingsButton.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

SettingsButton.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

SettingsButton.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

SettingsButton.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}



function CityCurrentGold(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "CityCurrentGold";
	
	this.x = 130;
	this.y = 120;
	this.z = 500;
	
	this.width = 200;
	this.height = 167;

	//Images
	this.image_src.push({"key":"default","value":"buttons/GoldParchment.png"});
	this.image_src.push({"key":"onMouseEnter","value":"buttons/GoldParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
CityCurrentGold.prototype = new InteractiveObject();
mixin(CityCurrentGold,RenderableObject);
CityCurrentGold.prototype.constructor = CityCurrentGold;

CityCurrentGold.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

CityCurrentGold.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

CityCurrentGold.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

CityCurrentGold.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function CurrentCityGoldText(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"backgrounds/TimeDisplay.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/TimeDisplay.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
CurrentCityGoldText.prototype = new InteractiveObject();
mixin(CurrentCityGoldText,RenderableObject);
CurrentCityGoldText.prototype.constructor = CurrentCityGoldText;

CurrentCityGoldText.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

CurrentCityGoldText.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = "" + TheActualGame.get_city_gold();
}


CurrentCityGoldText.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

CurrentCityGoldText.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

CurrentCityGoldText.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function CityCommodity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "CityCommodity";
	
	this.x = 330;
	this.y = 120;
	this.z = 500;
	
	this.width = 200;
	this.height = 167;

	//Images
	this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});
	this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
CityCommodity.prototype = new InteractiveObject();
mixin(CityCommodity,RenderableObject);
CityCommodity.prototype.constructor = CityCommodity;

CityCommodity.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

CityCommodity.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

CityCommodity.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

CityCommodity.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function CityCommodityText(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "CityCommodityText";
	
	this.x = 380;
	this.y = 175;
	this.z = 500;
	
	this.width = 90;
	this.height = 90;

	//Images
	//this.image_src.push({"key":"default","value":"backgrounds/TimeDisplay.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/TimeDisplay.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
CityCommodityText.prototype = new InteractiveObject();
mixin(CityCommodityText,RenderableObject);
CityCommodityText.prototype.constructor = CityCommodityText;

CityCommodityText.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

CityCommodityText.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

CityCommodityText.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

CityCommodityText.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}


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
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/TimeDisplay.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
JadeCommodity.prototype = new RenderableObject();
JadeCommodity.prototype.constructor = JadeCommodity;

function JadeCommodityPrice(){
	RenderableObject.call(this);
	
	this.name = "JadeCommodityPrice";
	
	this.x = 380;
	this.y = 175;
	this.z = 500;
	
	this.width = 90;
	this.height = 30;

	//Images
	this.image_src.push({"key":"default","value":"commodities/Jade.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/TimeDisplay.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
JadeCommodityPrice.prototype = new RenderableObject();
JadeCommodityPrice.prototype.constructor = JadeCommodityPrice;




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
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/TimeDisplay.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

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
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/TimeDisplay.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

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
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/TimeDisplay.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

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
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/TimeDisplay.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

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
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/TimeDisplay.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

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
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/TimeDisplay.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

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
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/TimeDisplay.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

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
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/TimeDisplay.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
CityCommodityPrices.prototype = new RenderableObject();
CityCommodityPrices.prototype.constructor = CityCommodityPrices;

CityCommodityPrices.prototype.update = function(){
	this.text["text"] = "" + TheActualGame.get_commodity_buy_price();	
}


/*
function CityBackground(){
	RenderableObject.call(this);
	
	this.name = "City_Background";
	
	//Dimensions
	this.width = 640;
	this.height = 480;
	
	
	this.image_src.push({"key":"default","value":"backgrounds/Test_wallpaper.jpg"});
	
}
CityBackground.prototype = new RenderableObject();
CityBackground.prototype.constructor = CityBackground;*/

function InventoryParchment(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "InventoryParchment";
	
	this.x = 0;
	this.y = 380;
	this.z = 500;
	
	this.width = 640;
	this.height = 254;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/InventoryParchment.png"});
	this.image_src.push({"key":"onMouseEnter","value":"backgrounds/InventoryParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InventoryParchment.prototype = new InteractiveObject();
mixin(InventoryParchment,RenderableObject);
InventoryParchment.prototype.constructor = InventoryParchment;

InventoryParchment.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

InventoryParchment.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InventoryParchment.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InventoryParchment.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}


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
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot1.prototype = new InteractiveObject();
mixin(InvSlot1,RenderableObject);
InvSlot1.prototype.constructor = InvSlot1;

InvSlot1.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_sell_commodity("jade");
}

InvSlot1.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot1.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot1.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}


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
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot2.prototype = new InteractiveObject();
mixin(InvSlot2,RenderableObject);
InvSlot2.prototype.constructor = InvSlot2;

InvSlot2.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_sell_commodity("pottery");
}

InvSlot2.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot2.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot2.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

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
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot3.prototype = new InteractiveObject();
mixin(InvSlot3,RenderableObject);
InvSlot3.prototype.constructor = InvSlot3;

InvSlot3.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_sell_commodity("honey");
}

InvSlot3.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot3.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot3.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}


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
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot4.prototype = new InteractiveObject();
mixin(InvSlot4,RenderableObject);
InvSlot4.prototype.constructor = InvSlot4;

InvSlot4.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_sell_commodity("gunpowder");
}

InvSlot4.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot4.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot4.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}


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
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot5.prototype = new InteractiveObject();
mixin(InvSlot5,RenderableObject);
InvSlot5.prototype.constructor = InvSlot5;

InvSlot5.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_sell_commodity("cattle");
}

InvSlot5.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot5.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot5.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

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
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot6.prototype = new InteractiveObject();
mixin(InvSlot6,RenderableObject);
InvSlot6.prototype.constructor = InvSlot6;

InvSlot6.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_sell_commodity("horses");
}

InvSlot6.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot6.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot6.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

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
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot7.prototype = new InteractiveObject();
mixin(InvSlot7,RenderableObject);
InvSlot7.prototype.constructor = InvSlot7;

InvSlot7.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_sell_commodity("leather");
}

InvSlot7.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot7.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot7.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

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
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot8.prototype = new InteractiveObject();
mixin(InvSlot8,RenderableObject);
InvSlot8.prototype.constructor = InvSlot8;

InvSlot8.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_sell_commodity("fur");
}

InvSlot8.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot8.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot8.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}





function InvSlot1Price(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot1Price.prototype = new InteractiveObject();
mixin(InvSlot1Price,RenderableObject);
InvSlot1Price.prototype.constructor = InvSlot1Price;

InvSlot1Price.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

InvSlot1Price.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = TheActualGame.get_commodity_sell_price("jade");
	
}

InvSlot1Price.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot1Price.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot1Price.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function InvSlot2Price(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot2Price.prototype = new InteractiveObject();
mixin(InvSlot2Price,RenderableObject);
InvSlot2Price.prototype.constructor = InvSlot2Price;

InvSlot2Price.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

InvSlot2Price.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = TheActualGame.get_commodity_sell_price("pottery");
	
}


InvSlot2Price.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot2Price.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot2Price.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function InvSlot3Price(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot3Price.prototype = new InteractiveObject();
mixin(InvSlot3Price,RenderableObject);
InvSlot3Price.prototype.constructor = InvSlot3Price;

InvSlot3Price.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

InvSlot3Price.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = TheActualGame.get_commodity_sell_price("honey");
	
}


InvSlot3Price.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot3Price.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot3Price.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}


function InvSlot4Price(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot4Price.prototype = new InteractiveObject();
mixin(InvSlot4Price,RenderableObject);
InvSlot4.prototype.constructor = InvSlot4Price;

InvSlot4Price.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

InvSlot4Price.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = TheActualGame.get_commodity_sell_price("gunpowder");
	
}


InvSlot4Price.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot4Price.prototype.onMouseMove = function(){

	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot4Price.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}


function InvSlot5Price(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot5Price.prototype = new InteractiveObject();
mixin(InvSlot5Price,RenderableObject);
InvSlot5Price.prototype.constructor = InvSlot5Price;

InvSlot5Price.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

InvSlot5Price.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = TheActualGame.get_commodity_sell_price("cattle");
	
}


InvSlot5Price.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot5Price.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot5Price.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function InvSlot6Price(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot6Price.prototype = new InteractiveObject();
mixin(InvSlot6Price,RenderableObject);
InvSlot6Price.prototype.constructor = InvSlot6Price;

InvSlot6Price.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

InvSlot6Price.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = TheActualGame.get_commodity_sell_price("horses");
	
}


InvSlot6Price.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot6Price.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot6Price.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function InvSlot7Price(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot7Price.prototype = new InteractiveObject();
mixin(InvSlot7Price,RenderableObject);
InvSlot7Price.prototype.constructor = InvSlot7Price;

InvSlot7Price.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

InvSlot7Price.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = TheActualGame.get_commodity_sell_price("leather");
	
}



InvSlot7Price.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot7Price.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot7Price.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function InvSlot8Price(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot8Price.prototype = new InteractiveObject();
mixin(InvSlot8Price,RenderableObject);
InvSlot8Price.prototype.constructor = InvSlot8Price;

InvSlot8Price.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

InvSlot8Price.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = TheActualGame.get_commodity_sell_price("fur");
	
}


InvSlot8Price.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot8Price.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot8Price.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}


function InvSlot1NumberOf(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot1NumberOf.prototype = new InteractiveObject();
mixin(InvSlot1NumberOf,RenderableObject);
InvSlot1NumberOf.prototype.constructor = InvSlot1NumberOf;

InvSlot1NumberOf.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

InvSlot1NumberOf.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = "" + TheActualGame.get_player_commodity_count("jade");
}

InvSlot1NumberOf.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot1NumberOf.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot1NumberOf.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function InvSlot2NumberOf(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot2NumberOf.prototype = new InteractiveObject();
mixin(InvSlot2NumberOf,RenderableObject);
InvSlot2NumberOf.prototype.constructor = InvSlot2NumberOf;

InvSlot2NumberOf.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

InvSlot2NumberOf.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = "" + TheActualGame.get_player_commodity_count("pottery");
}


InvSlot2NumberOf.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot2NumberOf.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot2NumberOf.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function InvSlot3NumberOf(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot3NumberOf.prototype = new InteractiveObject();
mixin(InvSlot3NumberOf,RenderableObject);
InvSlot3NumberOf.prototype.constructor = InvSlot3NumberOf;

InvSlot3NumberOf.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

InvSlot3NumberOf.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = "" + TheActualGame.get_player_commodity_count("honey");
}


InvSlot3NumberOf.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot3NumberOf.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot3NumberOf.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}


function InvSlot4NumberOf(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot4NumberOf.prototype = new InteractiveObject();
mixin(InvSlot4NumberOf,RenderableObject);
InvSlot4.prototype.constructor = InvSlot4NumberOf;

InvSlot4NumberOf.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

InvSlot4NumberOf.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = "" + TheActualGame.get_player_commodity_count("gunpowder");
}


InvSlot4NumberOf.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot4NumberOf.prototype.onMouseMove = function(){

	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot4NumberOf.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}


function InvSlot5NumberOf(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot5NumberOf.prototype = new InteractiveObject();
mixin(InvSlot5NumberOf,RenderableObject);
InvSlot5NumberOf.prototype.constructor = InvSlot5NumberOf;

InvSlot5NumberOf.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

InvSlot5NumberOf.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = "" + TheActualGame.get_player_commodity_count("cattle");
}


InvSlot5NumberOf.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot5NumberOf.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot5NumberOf.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function InvSlot6NumberOf(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot6NumberOf.prototype = new InteractiveObject();
mixin(InvSlot6NumberOf,RenderableObject);
InvSlot6NumberOf.prototype.constructor = InvSlot6NumberOf;

InvSlot6NumberOf.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

InvSlot6NumberOf.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = "" + TheActualGame.get_player_commodity_count("horses");
}


InvSlot6NumberOf.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot6NumberOf.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot6NumberOf.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function InvSlot7NumberOf(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot7NumberOf.prototype = new InteractiveObject();
mixin(InvSlot7NumberOf,RenderableObject);
InvSlot7NumberOf.prototype.constructor = InvSlot7NumberOf;

InvSlot7NumberOf.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

InvSlot7NumberOf.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = "" + TheActualGame.get_player_commodity_count("leather");
}


InvSlot7NumberOf.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot7NumberOf.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot7NumberOf.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function InvSlot8NumberOf(){
	InteractiveObject.call(this);
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

	//Images
	//this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot8NumberOf.prototype = new InteractiveObject();
mixin(InvSlot8NumberOf,RenderableObject);
InvSlot8NumberOf.prototype.constructor = InvSlot8NumberOf;

InvSlot8NumberOf.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

InvSlot8NumberOf.prototype.update = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.text["text"] = "" + TheActualGame.get_player_commodity_count("fur");
}


InvSlot8NumberOf.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot8NumberOf.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot8NumberOf.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function InvSlot9NumberOf(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "InvSlot9NumberOf";
	this.color = "#000";
	this.text = {
	"text":"03",
	"size":"bold 15",
	"font":"sarif",
	"text_align":"right"};
	this.x = 605;
	this.y = 453;
	this.z = 500;
	
	this.width = 50;
	this.height = 20;

	//Images
	//this.image_src.push({"key":"default","value":"buttons/CommodityParchment.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/CommodityParchment.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
InvSlot9NumberOf.prototype = new InteractiveObject();
mixin(InvSlot9NumberOf,RenderableObject);
InvSlot9NumberOf.prototype.constructor = InvSlot9NumberOf;

InvSlot9NumberOf.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
}

InvSlot9NumberOf.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

InvSlot9NumberOf.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

InvSlot9NumberOf.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}





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
	
	console.log("derp");
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
	
	
	
	
	this.x = 330;
	this.y = 75;
	this.z = 500;
	
	this.width = 100;
	this.height = 100;

	//Images
	this.image_src.push({"key":"default","value":"buttons/ParchmentButtonEnterCity.png"});
	this.image_src.push({"key":"onMouseEnter","value":"buttons/ParchmentButtonEnterCityOver.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
EnterCity.prototype = new InteractiveObject();
mixin(EnterCity,RenderableObject);
EnterCity.prototype.constructor = EnterCity;

EnterCity.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	this.parent.parent.goto_scene(TheActualGame.get_player_city());
}

EnterCity.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

EnterCity.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

EnterCity.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}


function EnterCityName(){
	RenderableObject.call(this);
	
	this.name = "EnterCityName";
	
	this.text = {
	"text":"name",
	"size":20,
	"font":"sarif",
	"text_align":"center"};
	
	
	this.x = 382;
	this.y = 120;
	this.z = 500;
	
	this.width = 75;
	this.height = 100;

	//Images
	//this.image_src.push({"key":"default","value":"buttons/ParchmentButtonEnterCity.png"});
	//this.image_src.push({"key":"onMouseEnter","value":"buttons/ParchmentButtonEnterCityOver.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
EnterCityName.prototype = new RenderableObject();
EnterCityName.prototype.constructor = EnterCityName;

EnterCityName.prototype.update = function() {
this.text["text"] = TheActualGame.get_player_city();
}





//City Locations
function HanoiCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "HanoiCity";
	
	this.x = 508;
	this.y = 275;
	this.z = 500;
	
	this.width = 15;
	this.height = 15;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"onMouseEnter","value":"backgrounds/Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
HanoiCity.prototype = new InteractiveObject();
mixin(HanoiCity,RenderableObject);
HanoiCity.prototype.constructor = HanoiCity;

HanoiCity.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_goto_city("hanoi");
}

HanoiCity.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

HanoiCity.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

HanoiCity.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}


function ChittagongCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "ChittagongCity";
	
	this.x = 435;
	this.y = 265;
	this.z = 500;
	
	this.width = 15;
	this.height = 15;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"onMouseEnter","value":"backgrounds/Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
ChittagongCity.prototype = new InteractiveObject();
mixin(ChittagongCity,RenderableObject);
ChittagongCity.prototype.constructor = ChittagongCity;

ChittagongCity.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_goto_city("chittagong");
}

ChittagongCity.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

ChittagongCity.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

ChittagongCity.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function MadrasCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "MadrasCity";
	
	this.x = 388;
	this.y = 305;
	this.z = 500;
	
	this.width = 15;
	this.height = 15;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"onMouseEnter","value":"backgrounds/Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
MadrasCity.prototype = new InteractiveObject();
mixin(MadrasCity,RenderableObject);
MadrasCity.prototype.constructor = MadrasCity;

MadrasCity.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_goto_city("madras");
	
}

MadrasCity.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

MadrasCity.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

MadrasCity.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}


function ColomboCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "ColomboCity";
	
	this.x = 393;
	this.y = 335;
	this.z = 500;
	
	this.width = 15;
	this.height = 15;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"onMouseEnter","value":"backgrounds/Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
ColomboCity.prototype = new InteractiveObject();
mixin(ColomboCity,RenderableObject);
ColomboCity.prototype.constructor = ColomboCity;

ColomboCity.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_goto_city("colombo");
}

ColomboCity.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

ColomboCity.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

ColomboCity.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function DebalCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "DebalCity";
	
	this.x = 340;
	this.y = 262;
	this.z = 500;
	
	this.width = 15;
	this.height = 15;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"onMouseEnter","value":"backgrounds/Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
DebalCity.prototype = new InteractiveObject();
mixin(DebalCity,RenderableObject);
DebalCity.prototype.constructor = DebalCity;

DebalCity.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_goto_city("debal");
}

DebalCity.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

DebalCity.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

DebalCity.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function YemenCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "YemenCity";
	
	this.x = 260;
	this.y = 303;
	this.z = 500;
	
	this.width = 15;
	this.height = 15;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"onMouseEnter","value":"backgrounds/Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
YemenCity.prototype = new InteractiveObject();
mixin(YemenCity,RenderableObject);
YemenCity.prototype.constructor = YemenCity;

YemenCity.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_goto_city("aden");
}

YemenCity.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

YemenCity.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

YemenCity.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function SuezCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "SuezCity";
	
	this.x = 208;
	this.y = 237;
	this.z = 500;
	
	this.width = 15;
	this.height = 15;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"onMouseEnter","value":"backgrounds/Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
SuezCity.prototype = new InteractiveObject();
mixin(SuezCity,RenderableObject);
SuezCity.prototype.constructor = SuezCity;

SuezCity.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_goto_city("suez");
}

SuezCity.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

SuezCity.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

SuezCity.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function AstrakhamCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "AstrakhamCity";
	
	this.x = 220;
	this.y = 138;
	this.z = 500;
	
	this.width = 15;
	this.height = 15;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"onMouseEnter","value":"backgrounds/Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
AstrakhamCity.prototype = new InteractiveObject();
mixin(AstrakhamCity,RenderableObject);
AstrakhamCity.prototype.constructor = AstrakhamCity;

AstrakhamCity.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_goto_city("moscow");
}

AstrakhamCity.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

AstrakhamCity.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

AstrakhamCity.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}

function ConstantinopleCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "ConstantinopleCity";
	
	this.x = 190;
	this.y = 195;
	this.z = 500;
	
	this.width = 15;
	this.height = 15;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"onMouseEnter","value":"backgrounds/Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
ConstantinopleCity.prototype = new InteractiveObject();
mixin(ConstantinopleCity,RenderableObject);
ConstantinopleCity.prototype.constructor = ConstantinopleCity;

ConstantinopleCity.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_goto_city("constantinople");
}

ConstantinopleCity.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

ConstantinopleCity.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

ConstantinopleCity.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}


function VeniceCity(){
	InteractiveObject.call(this);
	RenderableObject.call(this);
	
	this.name = "VeniceCity";
	
	this.x = 115;
	this.y = 178;
	this.z = 500;
	
	this.width = 15;
	this.height = 15;

	//Images
	this.image_src.push({"key":"default","value":"backgrounds/Location.png"});
	this.image_src.push({"key":"onMouseEnter","value":"backgrounds/Location.png"});
	
	//Sounds
	//this.sound_src.push({"key":"onClick","value":"testScene/onClick.wav"});
	//this.sound_src.push({"key":"onMouseEnter","value":"testScene/onMouseEnter.wav"});
	//this.sound_src.push({"key":"onMouseLeave","value":"testScene/onMouseLeave.wav"});

}
VeniceCity.prototype = new InteractiveObject();
mixin(VeniceCity,RenderableObject);
VeniceCity.prototype.constructor = VeniceCity;

VeniceCity.prototype.onClick = function(){
	//console.log("" + this.name + ": onClick triggered");
	TheActualGame.player_goto_city("venice");
}

VeniceCity.prototype.onMouseEnter = function(){
	//console.log("" + this.name + ": onMouseEnter triggered");
}

VeniceCity.prototype.onMouseMove = function(){
	//console.log("" + this.name + ": onMouseMove triggered");
}

VeniceCity.prototype.onMouseLeave = function(){
	//console.log("" + this.name + ": onMouseLeave triggered");
}



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