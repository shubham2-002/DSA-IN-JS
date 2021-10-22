let obj = {
    firstName: "vasudev",
    lastName: "singhal",
    age: 19,
    walk: function(){
        console.log(`${this.firstName} is walking`);
    }
}

let obj2 = {
    firstName: "suraj",
    lastName: "kumar",
    age: 20,
    walk: function(){
        console.log(`${this.firstName} is walking`);
    }
}

console.log(obj.firstName);
obj.firstName = 'suraj';
console.log(obj.firstName);
obj.walk();

console.log(typeof obj);

