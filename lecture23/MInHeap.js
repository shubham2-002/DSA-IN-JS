class MinHeap{
    #data;
    constructor(){
        this.#data = [];
    }

    size(){
        return this.#data.length;
    }

    // O(1)
    #left(idx){
        return 2*idx + 1;
    }

    // O(1)
    #right(idx){
        return 2*idx + 2;
    }

    // O(1)
    #parent(idx){
        return parseInt((idx-1)/2);
    }

    // O(logn)
    insert(value){
        this.#data.push(value);

        let idx = this.size() -1;

        while(idx > 0){
            let parent = this.#parent(idx);
            if(this.#data[idx] < this.#data[parent]){
                [this.#data[idx], this.#data[parent]] = [this.#data[parent],  this.#data[idx]];
                idx = parent;
            }
            else{
                break;
            }
        }
    }

    // O(logn)
    remove(){
        let value = this.#data[0];

        this.#data[0] = this.#data[this.size() -1];
        this.#data.pop();

        let idx = 0;
        while(idx < this.size()){
            let left = this.#left(idx);
            let right = this.#right(idx);

            let minIdx = idx;
            
            if(left < this.size() && this.#data[left] < this.#data[minIdx]){
                minIdx = left;
            }

            if(right < this.size() && this.#data[right] < this.#data[minIdx]){
                minIdx = right;
            }

            if(idx != minIdx){
                [this.#data[idx], this.#data[minIdx]] = [this.#data[minIdx],  this.#data[idx]];
                idx = minIdx;
            }
            else{
                break;
            }
        }
        return value;
    }

    // O(nlogn)
    heapFromArray(arr){
        for(let val of arr){
            this.insert(val);
        }
    }

    // O(nlogn)
    heapSort(arr){
        this.heapFromArray(arr);
        for(let i =0; i<arr.length; i++){
            let val = this.remove();
            arr[i] = val;
        }
    }

}

let heap = new MinHeap();

// heap.insert(6);
// heap.insert(23);
// heap.insert(7);
// heap.insert(78);
// heap.insert(12);
// heap.insert(52);
// heap.insert(13);
// heap.insert(35);

// while(heap.size()>0){
//     console.log(heap.remove());
// }

let data = [6, 33, 8, 23, 56, 12, 52, 5];

console.log(data);

heap.heapSort(data);
 
console.log(data);