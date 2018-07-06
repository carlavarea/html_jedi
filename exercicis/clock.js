var date = new Date(2018,6,7,0,0,0);
var cont = 0;

function showTime(){
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    
    s += cont;

    if(s == 60){
        date.setMinutes(m+1);
        s = 0;
        cont = 0;
    }
    else if(m == 60){
        h +=1;
        m = 0;
        s = 0;
        cont = 0;
    }
    else if(h ==24){
        h = 0;
        m = 0;
        s = 0;
        cont = 0;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    cont +=1;
}