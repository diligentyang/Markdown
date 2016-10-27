$(document).ready(function(){
	
	var line=0;
	
	$(".left").keyup(function(){
		//$(".right").html($(".left").html());
		//htmlcontents = htmlcontents.replace(/#([^#]*)#+|#([^#]*)/g,"<h1>$2$1</h1>");
		
		var markcontents = $(".left").html();
		
		var contents = markcontents.split("<br>");
		line = contents.length-1==0?1:contents.length-1;
		
		$(".right").html("<textarea>"+markcontents+"</textarea>");
 	})
	
})

function change(contents)
{
	var regular = [{
			pattern: 'h2',
			reg: /#{2}([^#]*)*/,
			replacement: '<h2>$1</h2>';
		},{
			pattern: 'h1',
			reg: /#([^#]*)*/,
			replacement: '<h1>$1</h1>';
		}
	
	]
}

function preg_rep(content,regular)
{
	
}