class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;

  }

  // Add To The End Of The List
  add(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      console.log("Added! as Head Node" + val);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      console.log("Added! " + val);
    }
    this.size++;
  }

  removeFront() {
    if (this.head === null) {
      return "list is empty, partner!!"
    } else {
      this.head = this.head.next
    }
    this.size--;
  }

  // Add a node to the front of the list
  addFront(val) {
    if (this.head === null) {
      this.head = new Node(val);
      console.log("Adeed to head! " + val);
    } else {
      let temp = this.head;
      this.head = new Node(val);
      this.head.next = temp;
      console.log("Added! to the head" + val);
    }
  }

  display() {
    let counter = 0;
    let current = this.head;
    let str = "";
    while (current) {
      str += counter + ". " + current.val + " ";
      current = current.next;
      counter++;
    }
    return (`${str}`);
  }

  insertAt(val, index) {
    if (index > 0 && index > this.size) {
      console.log("index is out of range");
      return false;
    }
    let newNode = new Node(val);
    let current = this.head;
    let prev;
    if (index === 0) {
      newNode.next = head;
      this.head = newNode;
    } else {
      current = this.head;
      let position = 0;
      while (position < index) {
        position++;
        prev = current;
        current = current.next;
      }
      newNode.next = current;
      prev.next = newNode;
    }
    this.size++;
  }

  removeAt(index) {
    if (index > 0 && index > this.size) {
      console.log("recheck your index there sir/madam!!!!");
      return false;
    }
    let current = this.head;
    let previous = current;
    let count = 0;
    // If the index is the head
    if (index === 0) {
      this.head = current.next;
    } else {
      // Get to the position to remove
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      //Get rid of that sucker!
      previous.next = current.next;
    }
    this.size--;
  }

  reverse() {
    let current = this.head;
    let previous = null;
    while (current !== null) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }
}

let list = new LinkedList();
list.add("Matthew");
list.add("Travis");
list.add("Eli");
list.addFront("Jonathan");
console.log(list.display());
list.insertAt("Vinita", 1);
console.log(list.display());
list.removeAt(2);
console.log(list.display());
list.reverse();
console.log(list.display());