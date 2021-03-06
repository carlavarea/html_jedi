var id = 1;

window.onload = function(){
	document.getElementById("but").addEventListener("click", function() {
		value = document.getElementById("text").value;
		submit(value);
	}, false);
}

function change_id(increment){
	id = parseInt(id);
	id = id + increment;
	if(id == 7) id = 1;
	if(id == 0) id = 6;
	crida_api();
}

function submit(value){
	value = parseInt(value);
	if(value != 1 && value != 2 && value != 3 && value != 4 && value != 5 && value != 6) {
		alert("Pokemon does not exist! :(");
	}
	else{
		id = value;
		crida_api();
	}
}
$().ready(function(){
	crida_api();
});

function crida_api(){
	console.log("id: " + id);
	$.get("http://40.118.8.76/pokemons/#id", {id: id},
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
}