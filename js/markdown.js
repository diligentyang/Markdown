$(document).ready(function(){
	$(".left").keyup(function(){
		//$(".right").html($(".left").html());
		var markcontents = $(".left").html();
		var htmlcontents = markcontents.replace(/#(.*)#/,"<h1>$1</h1>");
		$(".right").html(htmlcontents);
 	})
})