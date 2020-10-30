function light(sw){
	var pic;
	if (sw==0){
		pic="/Images/pic_bulbon.gif";
	}
	else{
		pic="/Images/pic_bulboff.gif";
	}
	document.getElementById('img1').src=pic;
}

$("document").ready(function(){
	$("#btn1").click(function(){
		$("#p1").text("Aye! band ker isko.");
		$("#p1").css({"width":"128px"});
	});
	$("#btn2").click(function(){
		$("#p1").text("Light on ker, bhot andhera hai!");
		$("#p1").css({"width":"200px"});
	});
});
