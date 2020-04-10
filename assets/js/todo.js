$("li").on("click",function(){
		$(this).toggleClass("completed");
});

$("li span").on("click",function(e){
		$(this).parent().fadeOut("200", function(){
			$(this).remove();
		});
		
		e.stopPropagation();
		
});

$("input").on("keypress",function(event){
		if(event.which === 13)
		{
			var task = $("input").val();
			$("ul").append("<li><span class=\"del\">X</span> "+task+"</li>");
		}	
			
});