class Animal{
    #legs;
    #hands;
    age;
    constructor(legs, hands, age){
        this.#legs = legs;
        this.#hands = hands;
        this.age = age;
    }

    getHands(){
        return this.#hands;
    }
    setHands(hands){
        this.#hands = hands;
    }
}

let obj = new Animal(2, 3, 10);
console.log(obj.getHands());
obj.setHands(4);
console.log(obj.getHands());