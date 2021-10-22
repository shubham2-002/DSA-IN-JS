class staticExp{
    static Gcount=0;
    count=0;
    constructor(count){
        this.count = count;
        staticExp.Gcount+= count;
    }

    getGcount(){
        return staticExp.Gcount;
    }
}


let obj = new staticExp(2);
let obj2 = new staticExp(4);

console.log(obj.count, obj2.count);

console.log(obj.getGcount(), obj2.getGcount());

console.log(staticExp);