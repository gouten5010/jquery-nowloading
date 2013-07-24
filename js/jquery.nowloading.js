/*************************************************
*
* jquery.nowloading.js
*
* Required: jQuery(http://jquery.com/)
* License: MIT
* Update: 2013/07/25
* Version: 0.0.1
* Author: GOUTEN
* URL: http://5010works.com/ http://blog.gouten.net/
* PluginURL: https://github.com/gouten5010/jquery-nowloading
*
**************************************************
*
* [ Default Option ]
* area: '#loader',
* useImage: true,
* image: 'img/loader.gif',
* useText: true,
* text: 'Now Loading...',
* delay: 500,
* fadeOutSpeed: 'fast'
*
*************************************************/

(function ($) {
	$.fn.nowloading = function (config) {
		//default settings
		var options = {
			area: '#loader',
			useImage: true,
			image: 'img/loader.gif',
			useText: true,
			text: 'Now Loading...',
			delay: 500,
			fadeOutSpeed: 'fast'
		};
		var setting = $.extend(options, config);

		return this.each(function() {
			//hide content area
			$(this).css({
				'filter':'alpha(opacity=0)',
				'-moz-opacity':'0',
				'opacity':'0'
			});

			//define various
			var targetStr = $(this).context.nodeName;
			var contentArea = targetStr.toLowerCase();
			var areaTag = setting.area;
			var areaId = areaTag.replace(/#/, "");

			//loadeing Area var
			loaderView = '<div id="' + areaId + '"><div class="inner"></div></div>';

			//create loading area
			if ( contentArea === 'body' ) {
				$(this).children().wrapAll('<div class="wrapContent"></div>');
				$('.wrapContent').after(loaderView);
			} else {
				$(this).after(loaderView);
			}

			//create loading image
			if ( setting.useImage === true ) {
				$(areaTag).children('.inner').prepend('<div class="image"><img src="' + setting.image + '" alt="Loader Image"></div>');
			}

			//create loading text
			if ( setting.useText === true ) {
				$(areaTag).children('.inner').append('<div class="text">' + setting.text + '</div>');
			}

			//play loading
			$(this).animate( { opacity: '1'},function(){
				$(areaTag).delay(setting.delay).fadeOut(setting.fadeOutSpeed);
			});

		});
	};
})(jQuery);