$(document).ready(function(){
	$(".left").keyup(function(){
		$(".right").html($(".left").html());
	})
})