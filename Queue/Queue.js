class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (this.rear === null) this.front = this.rear = newNode;
    else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }
  deQueue(val){
    if(this.front === null) return console.log("Queue  is empty");
    this.front = this.front.next;
    if(this.front === null) this.rear = null;
    this.size--;
  }
  empty(){
    return this.size===0
  }
  display(){
    if (this.rear === null) this.front = this.rear = newNode;
     let curr = this.front;
     while (curr!=null){
        process.stdout.write(curr.val + " ")
        curr = curr.next
     }
  }
}

let obj = new Queue();
console.warn("Eneque")
obj.enqueue(10)
obj.enqueue(20)
obj.enqueue(30)
obj.enqueue(40)
obj.enqueue(50)
obj.enqueue(60)
obj.display()
console.log();
console.warn("deQueue")
obj.deQueue()
obj.deQueue()
obj.display()