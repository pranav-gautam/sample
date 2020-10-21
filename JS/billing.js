$(document).ready(function(){
	$("input").on({
		focus: function(){
			$(this).css("background-color", "yellow");
		},
		blur: function(){
			$(this).css("background-color", "green");
		}
	});
	$("input[type=submit]").dblclick(function(){
		$(this).hide().fadeIn(5000);
	});
});

function billingFunction(){
	if(document.getElementById('same').checked)
	{
		var name=document.getElementById('shippingName').value;
		var zip=document.getElementById('shippingZip').value;

		document.getElementById('billingName').value=name;
		document.getElementById('billingZip').value=zip;
	}

	else
	{
		document.getElementById('billingName').value="";
		document.getElementById('billingZip').value="";
	}
}
