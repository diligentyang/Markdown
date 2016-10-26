$(document).ready(function(){
	$(".left").keyup(function(){
		//$(".right").html($(".left").html());
		$(".right").html();
		var markcontents = $(".left").html();
		var htmlcontents = markcontents.replace(/#([^#]*)#+|#([^#]*)/m,"<h1>$2$1<\/h1>");
		htmlcontents = htmlcontents.replace(/##([^#]*)##+|##([^#]*)/m,"<h2>$2$1<\/h2>");
		htmlcontents = htmlcontents.replace(/###([^#]*)###+|###([^#]*)/m,"<h3>$2$1<\/h3>");
		$(".right").html(htmlcontents);
 	})
})