$("ul").on("click", ".task",function(){
		$(this).toggleClass("completed");
});

$("ul").on("click",".del",function(e){
		$(this).parent().fadeOut("200", function(){
			$(this).remove();
		
		});
		
			e.stopPropagation();
		
});

$("input").on("keypress",function(event){
		if(event.which === 13)
		{
			var task = $(this).val();
			$("ul").append("<li><span class=\"del\"><i class=\"fas fa-trash-alt\"></i></span><span class=\"task\"> "+task+"</span></li>");
			$(this).val("");
		}	
			
});