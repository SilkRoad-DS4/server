function LogiBro(){
	this.values = new Array();
}

LogiBro.prototype.add_value = function(name, value, range, change){
	this.values[name] = {"cur_val":value, "pst_val":null,"range":range,"change":change};
}

LogiBro.prototype.test_value = function(name){
	
}