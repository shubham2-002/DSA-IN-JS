class Pair{
    key;
    value;
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
}

class HashMap{
    #data = [];
    #length = 10;
    #size = 0;
    #thero = 10;

    constructor(){
        for(let index = 0; index<this.#length; index++){
            this.#data.push([]);
        }
    }

    hashCode(key){
        let sumCode = 0;
        for (const ch of key) {
            sumCode += ch.charCodeAt(0);
        }
        return sumCode;
    }

    set(key, value){
        let hashcode = this.hashCode(key);
        let idx = hashcode%this.#length;

        let bucket = this.#data[idx];

        for (const pair of bucket) {
            if(pair.key === key){
                pair.value = value;
                return;
            }
        }

        let pair = new Pair(key, value);
        bucket.push(pair);
        this.#size++;

        if(this.#size > this.#length*this.#thero){
            this.rehashing();
        }
    }


    get(key){
        let hashcode = this.hashCode(key);
        let idx = hashcode%this.#length;

        let bucket = this.#data[idx];

        for (const pair of bucket) {
            if(pair.key === key){
                return pair.value;
            }
        }
        return null;
    }

    rehashing(){
        let oldData = this.#data;

        this.#data = [];
        this.#length = this.#length*2;
        this.#size = 0;

        for(let index = 0; index<this.#length; index++){
            this.#data.push([]);
        }

        for(const bucket of oldData){
            for(const pair of bucket){
                this.set(pair.key, pair.value);
            }
        }
    }

    has(key){
        let hashcode = this.hashCode(key);
        let idx = hashcode%this.#length;

        let bucket = this.#data[idx];

        for (const pair of bucket) {
            if(pair.key === key){
                return true;
            }
        }
        return false;
    }

    display(){
        return this.#data
    }
}

let map = new HashMap();

// map.set("apple", "a fruit");
// map.set("patotao", "a vegetable");
// map.set("moto", "a mobile phone");
// map.set("moto", "a phone");

// map.set("grapes", "a fruit");
// map.set("allo", "a vegetable");
// map.set("kuch bhi", "a mobile phone");

// console.log(map.get("apple"));

// console.log(map.has("aple"));

// console.log(map.display());

for(let index = 0; index < 100000; index++){
    map.set(`${index}`, index);
}

// console.log(map.display());