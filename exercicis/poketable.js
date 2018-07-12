$().ready(function(){
	$.get("http://40.118.8.76/pokemons/1",
	function(data){
		console.log(data);
		$("#name").text(data.name);
		$("#normal").attr('src' , data.images[0].front);
		$("#shiny").attr('src' , data.images[1].front_shiny);
		$("#code").text(data.num);
		$("#type").text(data.types[0].type.name);
		$("#hm").text(data.moves[0]);
	}, "json");
});