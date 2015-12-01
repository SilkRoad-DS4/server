var log = (function(){
	var errors = {
		0:"Unknown error occured",
		101:"Object failed to render",
		102:"Object not RenderableObject",
		201:"Loading aborted",
		202:"Network error",
		203:"Sound failed to decode",
		204:"Audio format not supported"
	};
	var error_help_text = "";
	return{
		throw_error:function(source, number){
			//Clean inputs
			var loc = typeof(source) == "string" ? source : "<undefined>";
			var num = typeof(number) == "number" ? number : 0;
			var error = typeof(errors[num]) != "undefined" ? errors[num] : errors[0];
			var message = loc + "[ERROR:" + num + "]: " + error;
			
			//Log error
			console.log("%c" + message, 'color: #b00');
			
			//Return Success
			return 1;
		}
	}
})();