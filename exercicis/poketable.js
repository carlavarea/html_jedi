$().ready(function(){
	$.get("http://40.118.8.76/pokemons/#id", {id: "6"},
	function(data){
		console.log(data[0]);
		$("#name").text(data[0].name);
		$("#normal").attr('src' , data[0].images[0].front);
		$("#shiny").attr('src' , data[0].images[1].front_shiny);
		$("#code").text(data[0].num);
		//mirem si té més d'1 type
		if(data[0].types.length == 1) $("#type").text(data[0].types[0].type.name);
		else $("#type").text(data[0].types[0].type.name + " & " + data[0].types[1].type.name);
		//mirem si té hm o és null
		if(data[0].moves.HM== null) $("#hm").text("None");
		else $("#hm").text(data[0].moves.HM);
	}, "json");
});