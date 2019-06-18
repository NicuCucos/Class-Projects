var div = document.getElementById('termo');


var t = prompt("Cate grade sunt afara");

if(t > 50 || t < -20 || t===null || t===""  ) {
    div.innerHTML =  ".......Fuck you";
}else{
div.innerHTML = '<div>-20|-10|  0| 10| 20| 30| 40| 50 </div>';
var w = (+t + 20) * 2.7;
div.innerHTML += '<div style="background:red; height:5px; width:'+w+'px"></div>';
if (t >= -20 && t <= 0) {
    div.innerHTML += "Rece";
}

else if(t <=10){
    div.innerHTML +=  "Normal";
}
else {
    div.innerHTML += "Cald";
}
}
