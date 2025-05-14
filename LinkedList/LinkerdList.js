class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null
    }
    insertAtFirst(data){
        let node = new Node(data);
        if(this.head == null) this.head = node;
        node.next = this.head;
        this.head = node;
    }
    print(data){
        if(this.head === null) return console.log("data is null");
        let temp = this.head;
        let ans = []
        while(temp){
            ans.push(temp.data);
            temp = temp.next;
        }
        console.log(ans.join("\n"));
    }
}

let obj = new LinkedList();
console.log(obj);
obj.insertAtFirst(10);
obj.insertAtFirst(20);
obj.print()