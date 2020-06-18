// Given a sorted Linked List delete all duplicates such that each element appear only once

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };

        this.tail = this.head;
        this.length = 1;
    };

    append(value) {
        const newNode = {
            value: value,
            next: null
        };

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this.printList();
    };

    printList() { //using the printList function or command to print your work
        const array = [];
        let currentNode = this.head; //assigns the head node object to currentNode

        while (currentNode  !== null) { //while currentNode isn't null then
            array.push(currentNode.value);
            currentNode = currentNode.next; //which assigns the next object to current node
        };
        return array;
    };

}


const duplicates = new LinkedList(1);
duplicates.append(2);
duplicates.append(3)
console.log(duplicates);

//the tail could be changing but not the head

this.head = {
    value: 1,
    next: {
        value: 2,
        next: null
    }
}

this.tail = {
    value: 2,
    next: null
}