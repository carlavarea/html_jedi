https://www.w3schools.com/howto/howto_js_animate.asp
function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var posY = 0;
    var id = setInterval(frame, 10);
    var width = screen.width;
    function frame() {
        if (pos == (width-60)) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';
            if(pos%330 == 0){
            	console.log("hola: " + posY);
            	posY = posY + 150; 
            	elem.style.top = posY + 'px';
            }
        }
    }
} 