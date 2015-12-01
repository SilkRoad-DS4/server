var Library = (function(){
	var load_image = function (name, src, callback){
		var tmpImage = new Image();
		tmpImage.src = "assets/images/" + src;
		tmpImage.onload = function(){
			callback.set_image(name, tmpImage);
		}
		tmpImage.onerror = function(){
			
			log.throw_error("<Library><load_image>",0);
		}
	}
	
	var load_sound = function (obj, callback){
		var tmpSound = new Audio();
		tmpSound.volume = 0.5;
		tmpSound.src = "assets/sounds/" + obj["value"];
		
		//Sound is loaded
		tmpSound.addEventListener('canplaythrough',function(){
			tmpSound.removeEventListener('canplaythrough',function(){},false);
			if(typeof obj["loop"] !== "undefined"){tmpSound.loop = obj["loop"];}
			if(typeof obj["volume"] !== "undefined"){tmpSound.volume = obj["volume"];}
			callback.set_sound(obj["key"],tmpSound);
		},false);
		
		//Sound fails to load
		tmpSound.addEventListener('error',function(e){
			log.throw_error("<Library><load_sound>",e.currentTarget.error.code + 200);
			tmpSound.removeEventListener('error',function(){},false);
		});
	}
	
	return{
		load_image:function(name, src, callback){
			load_image(name, src, callback);
		},
		
		load_sound:function(obj, callback){
			load_sound(obj, callback);
		}
	}
	
})();