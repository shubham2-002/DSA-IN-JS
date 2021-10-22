let map = new Map();

map.set("apple", "a fruit");
map.set("patotao", "a vegetable");
map.set("moto", "a mobile phone");

// console.log(map.get("apple"));

// console.log(map.has("aple"));

for (const [key, value] of map) {
    console.log(key, value);
}

