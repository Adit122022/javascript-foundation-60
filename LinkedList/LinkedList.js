class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
 class LinkedList {
    constructor(data){
this.head = null;
    }
     inserAtFirst(data){
      let newNode = new Node(data);
      if(this.head === null) this.head = newNode;
      newNode.next = this.head;
      this.head  = newNode;
     }
    //  inserAtLast(data){
    //     let newNode = new Node(data);
    //     if(this.head === null) this.head = newNode;
    //     let temp = this.head;
    //     while(temp.next!=null){
    //         temp = temp.next;
    //     }
    //     temp.next = newNode;
    //  }
    deleteAtFirst(){
        if(this.head === null) return console.log("data is null");
        if(this.head.next === null) this.head = null;
        this.head = this.head.next;
    }
     print(){
        if(this.head === null) return console.log("data is null");
        let temp = this.head ;
        let a =[]
        while(temp !=null){
            a.push(temp.data);
            temp = temp.next;
        }
         console.log(a.join(" -- >"));
     }
 }
 let obj = new LinkedList();
  obj.inserAtFirst(1)
  obj.inserAtFirst(2)
  obj.inserAtFirst(3)
  obj.inserAtFirst(4)
//   obj.inserAtLast(5)
//   obj.inserAtLast(6)
  obj.print()