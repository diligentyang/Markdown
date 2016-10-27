$(document).ready(function(){
	
	var line=0;
	
	$(".left").keyup(function(){
		//$(".right").html($(".left").html());
		//htmlcontents = htmlcontents.replace(/#([^#]*)#+|#([^#]*)/g,"<h1>$2$1</h1>");
		
		var markcontents = $(".left").html();
		
		var contents = markcontents.split("<br>");
		line = contents.length-1==0?1:contents.length-1;
		
		change(contents,line);
		
		$(".right").html("<textarea>"+markcontents+"</textarea>");
 	})
	
})

function change(contents,line)
{
	var htmlcontents="";
	var regular = [{
			pattern: 'h2',
			reg: /#{2}([^#]*)*/,
			replacement: '<h2>$1</h2>'
		},{
			pattern: 'h1',
			reg: /#([^#]*)*/,
			replacement: '<h1>$1</h1>'
		}];
	for (var i=0; i<line; i++) {
		for (var j=0; j<regular.length; j++) {
			preg_rep(contents[i], regular[j]);
		}
	}
	return htmlcontents;
}

function preg_rep(content,regular)
{
	
}