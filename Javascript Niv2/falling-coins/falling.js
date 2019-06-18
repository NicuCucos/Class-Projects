var stage = document.getElementById('stage');

function addCoin(){
    var div = document.createElement('div');
    div.className = 'coin falling';
    div.style.left = Math.round(Math.random() *100 ) + '%';
    div.style.transform = 'scale('+(Math.random() * 1.5 + 0.2)+ ')';
    var img = document.createElement('img');
    img.src = "coin.png"
    img.addEventListener('animationend',function(e){
        if(e.animationName == 'rot'){
        e.target.className = 'rotx';
     }
    });
    img.className = 'rotating';
    stage.appendChild(div);
    div.appendChild(img);
}

function removeCoin(){

}
