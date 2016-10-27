$(document).ready(function(){
	
	var line=0;
	
	$(".left").keyup(function(){
		//$(".right").html($(".left").html());
		//htmlcontents = htmlcontents.replace(/#([^#]*)#+|#([^#]*)/g,"<h1>$2$1</h1>");
		
		var markcontents = $(".left").html();
		
		var contents = markcontents.split("<br>");
		line = contents.length-1==0?1:contents.length-1;
		
		//$(".right").html("<textarea>"+change(contents,line)+"</textarea>");
		$(".right").html(change(contents,line));
 	})
	
})

function change(contents,line)
{
	
	var regular = [{
			pattern: 'line',
			reg: /^(\s*\w+)/,
			replacement: '<p>$1</p>'
		},{
			pattern: 'h6',
			reg: /^#{6}([^#]*)#*.*/g,
			replacement: '<h6>$1</h6>'
		},{
			pattern: 'h5',
			reg: /^#{5}([^#]*)#*.*/g,
			replacement: '<h5>$1</h5>'
		},{
			pattern: 'h4',
			reg: /^#{4}([^#]*)#*.*/g,
			replacement: '<h4>$1</h4>'
		},{
			pattern: 'h3',
			reg: /^#{3}([^#]*)#*.*/g,
			replacement: '<h3>$1</h3>'
		},{
			pattern: 'h2',
			reg: /^#{2}([^#]*)#*.*/g,
			replacement: '<h2>$1</h2>'
		},{
			pattern: 'h1',
			reg: /^#([^#]*)#*.*/g,
			replacement: '<h1>$1</h1>'
		},{
			pattern: 'hr',
			reg: /^(\s*\-{3,}).*/,
			replacement: '<hr>'
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