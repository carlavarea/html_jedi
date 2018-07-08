//js del carrousel
var index = 0;
var images = [];

images[0] = "blue.png";
images[1] = "green.png";
images[2] = "red.png";

function change_images(){
	if(index < 2){
		index++;
	} 
	else{
		index = 0;
	}
	document.slider.src = images[index];
}
setInterval(change_images, 2000);

//js del clock (mostra hora actual)
function showTime(){
	var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
}
//js del input
function change_value(){
	var x = document.getElementById("myText").value;
	document.getElementById("textResult").innerHTML = "Hola " + x;
}