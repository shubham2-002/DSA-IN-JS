class Human{
    firstName;
    lastName;
    age;
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    walk(){
        // console.log(this);
        console.log(`${this.firstName} is walking`);
    }
}

let vasu = new Human("Vasudev", "Singhal", 19);

let suraj = new Human("Suraj", "Kumar", 20);

console.log(vasu);

suraj.walk();