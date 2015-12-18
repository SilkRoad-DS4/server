var Library = (function(){
	var image_library = new Array();
	var hi = "hi";
	var load_image = function (src_name, name, src, callback){
		if(typeof (image_library[src_name]) != "undefined"){
			if(typeof (image_library[src_name][name]) != "undefined"){
				callback.set_image(name, image_library[src_name][name]);
				return true;
			}
		}
		
		var tmpImage = new Image();
		tmpImage.src = "assets/images/" + src;
		tmpImage.onload = function(){
			if( typeof(image_library[src_name]) == "undefined"){
				image_library[src_name] = new Array();
			}
			image_library[src_name][name] = tmpImage;
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
		load_image:function(src_name, name, src, callback){
			load_image(src_name, name, src, callback);
		},
		
		load_sound:function(obj, callback){
			load_sound(obj, callback);
		}
	}
	
})();