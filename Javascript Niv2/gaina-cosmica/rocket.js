class Rocket {
    constructor(x,y ) {
        this.id = "r-" + Math.round((Math.random() * 1000000));
        this.type = 'commodore 69';
        this.frames = ["-52px -812px" ]; //cadrele sprite-ului
        this.x = 0;  //random() 0......width window
        this.y = 0;
        this.w = 16;
        this.h = 22;
        this.direction_h = "right"; //

    }
    addToMap(){ // adaugam elementul pe harta
        window.map.innerHTML +=
        `<div id="${this.id}">` +
        this.render();

        `</div>`

        //  this.live();
        // conexiunea cu elementele "keydown"

        // document.body.onkeydown = this.action.bind( this );


    }

    // action(){
    //
    //     if(event.code == "Space"){
    //     this.shoot();
    //
    //     }
    //
    //
    //     if(event.key == "ArrowRight"){
    //     this.moveRight();
    //
    //     }
    //     if(event.key == "ArrowLeft"){
    //         this.moveLeft();
    //     }
    //     this.refresh();
    // }

    // shoot(){
    //     let rocket = new Rocket ();
    //     rocket.x = this.x + this.w /2 - rocket.w / 2;
    //     rocket.y = this.y -rocket.h;
    //     rocket.addToMap();
    // }

refresh() {
    document.getElementById(this.id).innerHTML = this.render();
}

// shoot(){
//     let rocket = new Rocket (window[this.id] );
//     rocket.addToMap();
// }

live(){
    var that = this;

    setInterval(function(){
        // verifcam daca se ciocneste

        for(var index in invaders){

        if(touch(window[that.id].firstElementChild, window[invaders[index].id].firstElementChild )){
            invaders[index].die();
        }

}
        that.moveUp();
        that.refresh();
    },25);
}
moveUp(){
    this.y-=10;
}

// moveRight(){
//
//     if(this.x > window.innerWidth - this.w){
//         this.direction_h = "left";
//         // this.moveDown();
//     }
//     this.x+=5;
// }

// moveLeft(){
//
//     if(this.x < 0){
//         this.direction_h = "right";
//         // this.moveDown();
//     }
//     this.x-=5;
// }

// moveDown(){
//     this.y+=10;
// }

    render(){ // redesenam elementul
        let html = `
        <div class="rocket" style="width: ${this.w}px; height: ${this.h}px; background-position: ${this.frames[0]}; left:${this.x}px; top:${this.y}px"></div>
        `;
        return html;
    }
}
