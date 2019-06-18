//harta gradinii - array
const EMPTY = 0;
const POTATO = 1;
const MELON = 2;
const TOMATO = 3;
const RAT = 4;

const POTATO_PRICE = 10;
const MELON_PRICE = 20;
const TOMATO_PRICE = 30;
const RAT_PRICE = 30;

var money = 100;
//celulele de tip number
var rat_r = 0;
var rat_c = 0;
var rat_dir = "right";

var garden = [
    [4,0,0,0,0,0,3,0,2,0],
    [1,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [0,0,0,2,0,2,0,0,0,0],
    [0,1,0,0,0,3,0,0,0,0],
    [0,0,0,0,0,0,0,3,0,0],
    [0,0,0,0,1,0,2,0,0,0],
    [0,2,0,0,2,0,0,0,3,0],
    [0,0,0,0,0,0,0,2,0,0],
    [0,0,0,0,0,0,0,2,0,0],

];


function show(){
var div = document.getElementById('garden');
div.innerHTML = '';
var coin= document.getElementById('money');
coin.innerHTML =money + '<div class="coin"></div>';


    for(var r=0; r<=9; r++){
        for(var c=0; c<=9; c++){

    if(garden[r][c] == MELON){
    div.innerHTML +=  '<div class="melon" onclick="gather(MELON, '+r+","+c+' );"></div>';
}
    if(garden[r][c] == EMPTY){
    div.innerHTML +=  '<div class="empty"></div>';
}
    if(garden[r][c] == TOMATO){
    div.innerHTML +=  '<div class="tomato" onclick="gather(TOMATO,'+r+","+c+');"></div>';
}
    if(garden[r][c] == POTATO){
    div.innerHTML +=  '<div class="potato" onclick="gather(POTATO,'+r+","+c+');"></div>';
}

    if(garden[r][c] == RAT){
    div.innerHTML +=  '<div class="rat" onclick="gather(RAT,'+r+","+c+');"></div>';
}
}
}
}


show();

function gather( vegetable, r, c ){
    if (vegetable == MELON){
    garden[r][c] = EMPTY;
    money = money+ MELON_PRICE;

    show();
    }
    if (vegetable == TOMATO){
    garden[r][c] = EMPTY;
    money= money+ TOMATO_PRICE;
    show();
    }
    if (vegetable == POTATO){
    garden[r][c] = EMPTY;
    money = money+ POTATO_PRICE;
    show();
    }
    if (vegetable == RAT){
    garden[r][c] = EMPTY;
    money = money - RAT_PRICE;
    show();
    }
    coin.innerHTML= money + '<div class="coin"></div>';
}

// miscarile guzanului

function moveRatRight(){
    if(rat_c <9 ){
    garden[rat_r][rat_c] = EMPTY;
    garden[rat_r][++rat_c] = RAT;
    show();
}
}
function moveRatLeft(){
    if(rat_c > 0){
    garden[rat_r][rat_c] = EMPTY;
    garden[rat_r][--rat_c] = RAT;
    show();
}
}
function moveRatUp(){
    if(rat_r<0){
    garden[rat_r][rat_c] = EMPTY;
    garden[--rat_r][rat_c] = RAT;
    show();
}
}
function moveRatDown(){
    if(rat_r>9){
    garden[rat_r][rat_c] = EMPTY;
    garden[++rat_r][rat_c] = RAT;
    show();
}
}

function moveRat(){
// schimbarea directiei aleatorii
if(Math.round(Math.random()*100) % 5 == 0){
rat_dir = randomDirection();
}

    if (rat_dir == "right"){
        moveRatRight();
    }
    if (rat_dir == "left"){
        moveRatLeft();
    }
    if (rat_dir == "up"){
        moveRatUp();
    }
    if (rat_dir == "down"){
        moveRatDown();
    }
}
setInterval(moveRat, 200);

function randomDirection() {
    var directions = ["right","left","up","down"];
    return directions[Math.round(Math.random() * 100) % 5 == 0];
}
