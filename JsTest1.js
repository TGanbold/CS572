
class Musician {
    constructor(name){
        this.name=name;
        //console.log(this.name);
    }

    play(piece) {
        console.log(this.name , "is now playing" ,piece  )
    }
}

let a = new Musician("Violisnist");
let aa = new Musician("Pianist");
a.play("piece");

String.prototype.nefunc= function() {
    
    console.log("hiii");
}



