class Pair{
    key;
    value;
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
}

class ArrayMap{
    #data = [];

    set(key, value){

        for (const pair of this.#data) {
            if(pair.key === key){
                pair.value = value;
                return;
            }
        }

        let pair = new Pair(key, value);
        this.#data.push(pair);
    }

    get(key){
        for (const pair of this.#data) {
            if(pair.key === key){
                return pair.value;
            }
        }
        return null;
    }

    has(key){
        for (const pair of this.#data) {
            if(pair.key === key){
                return true;
            }
        }
        return false;
    }

    display(){
        let arr = this.#data.map(pair => `${pair.key} => ${pair.value}`);
        return arr.join('\n');
    }
}

let map = new ArrayMap();

map.set("apple", "a fruit");
map.set("patotao", "a vegetable");
map.set("moto", "a mobile phone");
map.set("moto", "a phone");

// console.log(map.get("apple"));

// console.log(map.has("apple"));

console.log(map.display());