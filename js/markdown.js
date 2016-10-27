$(document).ready(function(){
	
	var line=0;
	
	$(".left").keyup(function(){
		//$(".right").html($(".left").html());
		//htmlcontents = htmlcontents.replace(/#([^#]*)#+|#([^#]*)/g,"<h1>$2$1</h1>");
		
		var markcontents = $(".left").html();
		
		var contents = markcontents.split("<br>");
		line = contents.length-1==0?1:contents.length-1;
		
		$(".right").html(change(contents,line));
 	})
	
})

function change(contents,line)
{
	
	var regular = [{
			pattern: 'h2',
			reg: /^#{2}([^#]*)#*.*/g,
			replacement: '<h2>$1</h2>'
		},{
			pattern: 'h1',
			reg: /^#([^#]*)#*.*/g,
			replacement: '<h1>$1</h1>'
		}];
	for (var i=0; i<line; i++) {
		for (var j=0; j<regular.length; j++) {
			contents[i]=preg_rep(contents[i], regular[j]);
			
		}
	}
	return contents.join("");
}

function preg_rep(content,regular)
{
	//console.log(content);
	content=content.replace(regular.reg, regular.replacement);
	//console.log(content);
	return content;
}