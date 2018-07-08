//el carrousel funciona l'unica cosa que al estar posat un interval de 2 segons si fas click als botons
//poder saltes dues slides pq coincideix que s'ha llençat el interval + el boto
var index = 0;
var images = [];

images[0] = "blue.png";
images[1] = "green.png";
images[2] = "red.png";

function plusSlides(n) {
  	if(n == -1){
  		if(index == 0){
  			index = 2;
  		}
  		else{
  			index += n;
  		}
  	}
  	else{
  		if(index < 2){
  			index +=n;
  		}
  		else{
  			index = 0;
  		}
  	}
  	document.slider.src = images[index];
  	//console.log("slider button: " + index);
}

function change_images(){
	if(index < 2){
		index++;
	} 
	else{
		index = 0;
	}
	document.slider.src = images[index];
	//console.log("slider interval: " + index);
}
setInterval(change_images, 2000);