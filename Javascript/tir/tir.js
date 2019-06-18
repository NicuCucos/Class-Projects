var bullets = 10; // cite patroane ai la dispozitie




function addDuck() {
    var lake = document.getElementById('lake');
    var duck = `<div id="duck" class="duck" onclick="killDuck()"></div>`;
    lake.innerHTML = duck;
}
function moveDuck() {
    var duck = document.getElementById('duck');
    duck.style.bottom = randomBottom() + 'px';
}

function randomBottom() {
    var bot = Math.floor(Math.random() * 200);
    return bot;
}
function audioQuack() {
    var aux = document.getElementById('aux');
    var audio = `<audio controls src="sound.mp3" autoplay></audio>`;
    aux.innerHTML = audio;
}

setInterval (moveDuck, 1000);
function killDuck() {
    audioQuack();
}

//////////////////////////////////

addDuck();
