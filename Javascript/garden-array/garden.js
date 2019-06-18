//harta gradinii - array
const EMPTY = 0;
const POTATO = 1;
const MELON = 2;
const TOMATO = 3;

const POTATO_PRICE = 10;
const MELON_PRICE = 20;
const TOMATO_PRICE = 30;

var money = 100;
//celulele de tip number
var garden = [
    MELON,   //0
    MELON,   //1
    MELON,   //2
    EMPTY,   //3
    EMPTY,   //4
    TOMATO,  //5
    TOMATO,  //6
    EMPTY,   //7
    POTATO,  //8
    POTATO  //9
];

function show(){
var div = document.getElementById('garden');
div.innerHTML = '';
var coin= document.getElementById('money');
coin.innerHTML =money + '<div class="coin"></div>';

for ( var i=0; i<=9; i++){
    if(garden[i] == MELON){
    div.innerHTML +=  '<div class="melon" onclick="gather(MELON, '+i+');"></div>';
}
    if(garden[i] == EMPTY){
    div.innerHTML +=  '<div class="empty"></div>';
}
    if(garden[i] == TOMATO){
    div.innerHTML +=  '<div class="tomato" onclick="gather(TOMATO, '+i+');"></div>';
}
    if(garden[i] == POTATO){
    div.innerHTML +=  '<div class="potato" onclick="gather(POTATO, '+i+');"></div>';

}
}
}
show();

function gather( vegetable, i ){
    if (vegetable == MELON){
    garden[i] = EMPTY;
    money = money+ MELON_PRICE;

    show();
    }
    if (vegetable == TOMATO){
    garden[i] = EMPTY;
    money= money+ TOMATO_PRICE;
    show();
    }
    if (vegetable == POTATO){
    garden[i] = EMPTY;
    money = money+ POTATO_PRICE;
    show();
    }
    coin.innerHTML= money + '<div class="coin"></div>';
}
