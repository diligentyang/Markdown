$(document).ready(function(){
	
	var line=0;
	
	$(".left").keydown(function(e){
		if(e.keyCode==13){
			$(".right").append("~");
		}
	})
	$(".left").keyup(function(){
		//$(".right").html($(".left").html());
		$(".right").html();
		var markcontents = $(".left").html();
		var htmlcontents = markcontents.replace(/###([^#]*)####+|###([^#]*)/g,"<h3>$2$1</h3>");
		htmlcontents = htmlcontents.replace(/##([^#]*)##+|##([^#]*)/g,"<h2>$2$1</h2>");
		htmlcontents = htmlcontents.replace(/#([^#]*)#+|#([^#]*)/g,"<h1>$2$1</h1>");
		htmlcontents = htmlcontents.replace(/<br>/g,"");
		$(".right").html("<textarea>"+htmlcontents+"</textarea>");
 	})
})