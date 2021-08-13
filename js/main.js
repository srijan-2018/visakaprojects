(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
        // Use $ here...
		
		$(window).load(function() {
			$("#loading").fadeOut("slow");
		});
		
		$(document).ready(function () {
  		var customContainer = jQuery(".iso-container");
  		customContainer.isotope({
    	filter: "*",
    	transitionDuration: "2s",
    	animationOptions: {
      	duration: 7500,
      	queue: false
    	},

    	layoutMode: "fitRows",
    	fitRows: {
      	gutter: 0
    	}
  		});

  		jQuery("#custom-filter li:first-child > a").addClass("is-checked");

  		jQuery("#custom-filter a").click(function () {
    	jQuery("#custom-filter .is-checked").removeClass("is-checked");
    	jQuery(this).addClass("is-checked");

    	var customSelector = jQuery(this).attr("data-filter");
    	customContainer.isotope({
      	filter: customSelector,
      	transitionDuration: "2s",
      	animationOptions: {
        duration: 7500,
        queue: false
      	},
      	layoutMode: "fitRows",
      	fitRows: {
        gutter: 0
      	}
    	});
    	return false;
  		});
		});

    

		btn.on('click', function(e) {
		  e.preventDefault();
		  $('html, body').animate({scrollTop:0}, '300');
		});

	// var preloader = document.getElementById('loading');
	// setTimeout (function myLoader(){
	// 	preloader.style.display = 'none'
	// },1500)
	
		
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();



