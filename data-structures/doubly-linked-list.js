class CreateNode {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  
  class DoublyLinkedList {
    constructor() {
      this.head = {
        value: null,
        next: null,
        prev: null
      };
      this.tail = this.head;
      this.length = 0;
    }
  
    append(value) {
      if (this.head.value === null) {
        this.head.value = value;
      }
      else {
        const newNode = new CreateNode(value);
        
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode; 
      }
      this.length++;
    }
  
    prepend(value) {
      const newNode = new CreateNode(value);
  
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
    } 
  
    insert(value, index) {
      if (index === 0) {
        this.prepend(value);
      }
      else {
        const newNode = new CreateNode(value);
    
        let currentNode = this.head;
        let counter = 0;
        
        while (counter !== index - 1) {
          currentNode = currentNode.next;
          counter++;
        }
    
        const temp = currentNode.next;
        currentNode.next = newNode;
        newNode.next = temp;
        newNode.prev = currentNode;
        temp.prev = newNode;
        this.length++;  
      }
    }
  
    delete(index) {
      if (index > this.length) {
        return "FAILURE";
      }
  
      if (index === 0) {
        const temp = this.head.next;
        this.head = temp;
        this.head.prev = null;
      }
      else {
        let currentNode = this.head;
        let counter = 0;
        
        while (counter !== index - 1) {
          currentNode = currentNode.next;
          counter++;
        }
    
        const temp = currentNode.next.next;
        currentNode.next = temp;
        temp.prev = currentNode;
      }
      
      this.length--;
    }
  
    printList() {
      const list = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        list.push(currentNode.value);
        currentNode = currentNode.next;
      }
      console.log(list);
    }
  
    printReversedList() {
      const list = [];
      let currentNode = this.tail;
      while (currentNode !== null) {
        list.push(currentNode.value);
        currentNode = currentNode.prev;
      }
      console.log(list);
    }
  }