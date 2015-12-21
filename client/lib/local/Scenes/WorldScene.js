function WorldScene(id, renderer, parent){
	Scene.call(this, id, renderer, parent);

	this.add_object(new DateScroll());
	this.add_object(new DateScrollText());
	this.add_object(new WorldBackground());
	this.add_object(new GoldButton());
	this.add_object(new GoldButtonText());
	//this.add_object(new SettingsButton());
	this.add_object(new InventoryParchment());
	this.add_object(new InvSlot1());
	this.add_object(new InvSlot2());
	this.add_object(new InvSlot3());
	this.add_object(new InvSlot4());
	this.add_object(new InvSlot5());
	this.add_object(new InvSlot6());
	this.add_object(new InvSlot7());
	this.add_object(new InvSlot8());
	
	this.add_object(new InvSlot1NumberOf());
	this.add_object(new InvSlot2NumberOf());
	this.add_object(new InvSlot3NumberOf());
	this.add_object(new InvSlot4NumberOf());
	this.add_object(new InvSlot5NumberOf());
	this.add_object(new InvSlot6NumberOf());
	this.add_object(new InvSlot7NumberOf());
	this.add_object(new InvSlot8NumberOf());
	
	this.add_object(new HanoiCity());
	this.add_object(new ChittagongCity());
	this.add_object(new MadrasCity());
	this.add_object(new ColomboCity());
	this.add_object(new DebalCity());
	this.add_object(new YemenCity());
	this.add_object(new SuezCity());
	this.add_object(new AstrakhamCity());
	this.add_object(new ConstantinopleCity());
	this.add_object(new VeniceCity());
	this.add_object(new EnterCity());
	this.add_object(new EnterCityName());
	
	
	this.add_object(new EnterCityName());
	
	this.add_object(new TestSpriteObject());
	this.add_object(new EventOverlay());
	this.add_object(new YearWatcher());
}
WorldScene.prototype = new Scene(0);