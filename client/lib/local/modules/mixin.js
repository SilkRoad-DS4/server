//Mixin
//Courtesy of http://raganwald.com/2014/04/10/mixins-forwarding-delegation.html
//Modified by Jeffrey Nelson (Prototype was missing (lines 14,15,16))
//October 28, 2015

function mixin(){
	var __slice = [].slice;
	var consumer = arguments[0],
		providers = __slice.call(arguments, 1),
		key,
		provider;
	for(var i = 0; i < providers.length; i++){
		provider = providers[i];
		for(key in provider.prototype){
			if(provider.prototype.hasOwnProperty(key)){
				consumer.prototype[key] = provider.prototype[key];
			}
		}
	}
	return consumer;
}