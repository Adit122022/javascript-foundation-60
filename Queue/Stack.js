// class Queue{
//     constructor(){
//         this.stack = []
//     }
//     enque(val){
//          this.stack.push(val) // pushing the value at last of the stack 
//     }
//     deqeue(){
//         if(this.stack.length === 0) return console.log("Queue is empty");
//         this.stack.shift();
//     }
//     IsEmpty(){
//         return this.stack.length === 0;
//     }
//     peak(){
//         if(this.stack.length === 0) return console.log("Queue is empty");
//         return this.stack[0];

//     }

// }

//  let queue = new Queue();
//  queue.enque(1);
//  queue.enque(2);
//  queue.enque(3);
//  console.log(queue.stack); // array
//  queue.deqeue();
//  console.log(queue.stack); // 
//  queue.deqeue();
//  console.log(queue.stack); // 3
//  console.log(queue.peak()); // 2



//   Implementation of stack using linked list  

/*
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Stack{
    constructor() {
        this.top = null;
        this.size = 0;
    }
    push(data) {
        this.size++;
        let newNode = new Node(data);
        if (this.top)   newNode.next = this.top;
        this.top  = newNode;
    }
    pop(){
        if(this.top === null) return console.log("Stack is empty");
        this.size--;
        let temp = this.top;
        this.top = this.top.next;
        return temp.data;
    }
    peek(){
        if(this.top === null){
              console.log("Stack is empty");
            return null;}
        return this.top.data;
    }
        isEmpty(){
        return this.size === 0;}
    display(){
        if(this.top === null) return console.log("Stack is empty");
        let temp = this.top ;
        let a =[]
        while(temp!=null){
            a.push(temp.data);
            temp = temp.next;
        }
        a.reverse();
         console.warn(a.join(" -->  "));
 
    }
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

stack.display(); // 40 -- > 40 -- > 30 -- > 20 -- > 10
console.log('====================================');

stack.pop();

stack.display(); // 40 -- > 30 -- > 20 -- > 10
console.log('====================================');
console.log(stack.peek());
console.log('===================================='); // 10

console.log(stack.size); // 4

*/

//   Implementing stack using array
 class Stack{
    constructor() {
        this.stack = [];
    }
    push(data) {
        this.stack.push(data);
    }
    pop(){
        if(this.stack.length === 0) return console.log("Stack is empty");
        return this.stack.pop();
    }
    peek(){
        if(this.stack.length === 0) return console.log("Stack is empty");
        return this.stack[this.stack.length - 1];
    }
    display(){
        if(this.stack.length === 0) return console.log("Stack is empty");
        console.log(this.stack.reverse().join(" --> "));
    }
 }

 let stack = new Stack();
 stack.push(10);
 stack.push(20);
 stack.push(30);
 stack.push(40);
 stack.display(); // 40 --> 30 --> 20 --> 10
 console.warn('====================================');
 stack.pop();
 stack.display(); // 40 --> 30 --> 20
 console.warn('====================================');
 console.log(stack.peek()); // 40
 console.warn('===================================='); 