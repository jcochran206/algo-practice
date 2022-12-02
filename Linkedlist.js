//Given a linked list return it in reverse
class ListNode {
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}
// generate linked list
const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);

// generate 
const printList = (head) => {
    if(!head){
        return;
    }
    console.log(head.val);
    printList(head.next);
}



function reverseLinkedList(head){
    let prev = null;
    let current = head;
    while(current){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
printList(linkedList);
console.log('reverse after')
console.log(reverseLinkedList(linkedList));