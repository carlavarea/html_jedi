$().ready(function(){
	$.get("https://swapi.co/api/people/1/?format=json",
	function(data){
		$("#name").text(data.name);
		$("#eye").text(data.eye_color);
	}, "json")
	.done(function(){
		alert($("#name").text());
	});

});