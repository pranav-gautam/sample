$("document").ready(function(){
	$("#myInput1").on("keyup",function(){
		var value1 = $(this).val().toLowerCase();
		$("#myTable tr").filter(function(){
			$(this).toggle($(this).text().toLowerCase().indexOf(value1)>-1);
		});
	});
});

$("document").ready(function(){
	$("#myInput2").on("keyup",function(){
		var value2 = $(this).val().toLowerCase();
		$("#myList li").filter(function(){
			$(this).toggle($(this).text().toLowerCase().indexOf(value2)>-1);
		});
	});
});

$("document").ready(function(){
	$("#myInput3").on("keyup",function(){
		var value3 = $(this).val().toLowerCase();
		$("#myDIV *").filter(function(){
			$(this).toggle($(this).text().toLowerCase().indexOf(value3)>-1);
		});
	});
});