$("ul").on( "click", "li", function(){

	if($(this).css("color") === "rgb(128, 128, 128)"){
			$(this).css("color", "black");
	}

	else{
		$(this).css("color", "gray");
	}
	
});

$("ul").on( "click", "span", function(event){

	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});

	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if( event.which === 13){

		var text = $(this).val();
		$(this).val("");

		$("ul").append("<li><span> <i class='fa fa-trash'></i> </span>" + text + "</li>");
	}
});

$(".fa-thumb-tack").click(function(){
	$("input[type='text'").fadeToggle(200);
});