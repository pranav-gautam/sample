$("document").ready(function(){
	$("button").click(function(){
		var div=$("div");
		div.animate({height:'300px',opacity:'0.4'},"slow");
		div.animate({width:'300px',opacity:'0.8'},"slow");
		div.animate({height:'100px',opacity:'0.4'},"slow");
		div.animate({width:'300px',opacity:'0.8'},"slow");
		div.animate({fontSize:'5.5em'},"slow");
	});
});