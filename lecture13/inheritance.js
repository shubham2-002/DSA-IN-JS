class Animal{
    legs;
    hands;
    constructor(legs, hands){
        this.legs = legs;
        this.hands = hands;
    }
    walk(){
        console.log("Animal is walking");
    }
}


class Human extends Animal{
    name;
    constructor(name, legs, hands){
        super();
        this.name = name;
    }

    walk(){
        console.log("Human is walking");
    }

    run(){
        super.walk();
        console.log("Human is running");
    }
}

let animal = new Animal(4, 0);
let vasu = new Human("vasudev", 2, 2);
// console.log(vasu);
// animal.walk();
// vasu.run();

console.log(vasu);