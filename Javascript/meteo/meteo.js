function addFlake(){
    var div_map = document.getElementById('map');
    var l = randomLeft();
    div_map.innerHTML = `<div style="left: ${l}px;" class="flake"></div>`;
}
addFlake();

function randomLeft(){
    var window_width = innerWidth; // latimea interna a ferstrei
    var left = Math.floor(Math.random() * window_width);
    return left; //returanm valoarea indicata inapoi
}

randomLeft();

setInterval(addFlake, 500);
