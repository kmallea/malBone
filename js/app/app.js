var App = (function(){

	var options = {
		isDev : true,
		onInit : null
	},
	settings = {
		version : 0.1,
		appName : 'BareBone',
		startTime : 0,
		endTime : 0
	},
	api = {
		pub : {
			init : function(opts){
				dev.timer.start();
				$.extend(options,opts);
				
				if(typeof options.onInit === 'function'){
					options.onInit.call(this);
				}
				dev.log('initialized in ' + dev.timer.stop() + 'ms');
			}
		},
		priv : {
			
			
		}
	},
	dev = {
		timer : {
			start : function(){
				settings.startTime = new Date();
			},
			stop : function(){
				settings.endTime = new Date();
				var startTime = settings.startTime.getTime(),
				endTime = settings.endTime.getTime();
				var timeDif = endTime - startTime;
				return timeDif;
			}
		},
		log : function(){
			if(options.isDev){
				console.log(settings.appName + ': debug:' + options.isDev + ' ' , arguments);
			}	
		}	
	}
	

	return api.pub;

})();