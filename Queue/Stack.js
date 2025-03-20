class Queue{
    constructor(){
        this.stack = []
    }
    enque(val){
         this.stack.push(val) // pushing the value at last of the stack 
    }
    deqeue(){
        if(this.stack.length === 0) return console.log("Queue is empty");
        this.stack.shift();
    }
    IsEmpty(){
        return this.stack.length === 0;
    }
    peak(){
        if(this.stack.length === 0) return console.log("Queue is empty");
        return this.stack[0];

    }

}

 let queue = new Queue();
 queue.enque(1);
 queue.enque(2);
 queue.enque(3);
 console.log(queue.stack); // array
 queue.deqeue();
 console.log(queue.stack); // 
 queue.deqeue();
 console.log(queue.stack); // 3
 console.log(queue.peak()); // 2