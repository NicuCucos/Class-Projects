let n_invaders = random(10,20);
let invaders = [];
while(n_invaders--){
    let i = new Invader();
    i.addToMap();
    invaders.push(i);
}

// let i = new Invader();
// i.addToMap();
let p = new Player();
p.addToMap();
