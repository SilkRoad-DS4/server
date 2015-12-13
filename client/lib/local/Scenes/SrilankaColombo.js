function SrilankaColombo(id, renderer, parent){
	Scene.call(this, id, renderer, parent);
	
	this.add_object(new DateScroll());
	this.add_object(new DateScrollText());
	this.add_object(new ColomboBackground());
	this.add_object(new GoldButton());
	this.add_object(new GoldButtonText());
	this.add_object(new BuyButton());
	
	this.add_object(new ExitButton());
	//this.add_object(new SettingsButton());
	this.add_object(new CityCurrentGold());
	this.add_object(new CurrentCityName());
	this.add_object(new CityCommodity());
	this.add_object(new InventoryParchment());
	this.add_object(new InvSlot1());
	this.add_object(new InvSlot2());
	this.add_object(new InvSlot3());
	this.add_object(new InvSlot4());
	this.add_object(new InvSlot5());
	this.add_object(new InvSlot6());
	this.add_object(new InvSlot7());
	this.add_object(new InvSlot8());
	
	this.add_object(new InvSlot1Price());
	this.add_object(new InvSlot2Price());
	this.add_object(new InvSlot3Price());
	this.add_object(new InvSlot4Price());
	this.add_object(new InvSlot5Price());
	this.add_object(new InvSlot6Price());
	this.add_object(new InvSlot7Price());
	this.add_object(new InvSlot8Price());

	this.add_object(new InvSlot1NumberOf());
	this.add_object(new InvSlot2NumberOf());
	this.add_object(new InvSlot3NumberOf());
	this.add_object(new InvSlot4NumberOf());
	this.add_object(new InvSlot5NumberOf());
	this.add_object(new InvSlot6NumberOf());
	this.add_object(new InvSlot7NumberOf());
	this.add_object(new InvSlot8NumberOf());
	
	this.add_object(new CurrentCityGoldText());
	this.add_object(new GunpowderCommodity());
	this.add_object(new CityCommodityPrices());
	
	this.add_object(new TestMusic());
}
SrilankaColombo.prototype = new Scene(0);