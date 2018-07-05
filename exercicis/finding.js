window.onload = function(){
	var y = document.getElementsByTagName("div");
	for(i = 0; i < y.length; ++i){
		y[i].innerHTML = "THIRD";
	}
	document.getElementById("first").innerHTML = "PRIMER";
	var x = document.getElementsByClassName("second");
	for(i = 0; i < x.length; ++i){
		x[i].innerHTML = "SECOND";
	}
}

