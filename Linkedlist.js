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

/* double linkedlist allows  
Given a doubly linked list, list nodes also have a child property 
that can point to a separate doubly linked list
these child lists can also have one or more child dbl linked lists of their 
own and so on
*/
class ListNode2 {
    constructor(val, next = null, prev = null, child = null) {
      this.val = val;
      this.next = next;
      this.prev = prev;
      this.child = child;
    }
}

const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6]

const buildMultiLevel = function(nodes) {
  const head = new ListNode2(nodes[0]);
  let currentNode = head;

  for(let i = 1; i < nodes.length; i++) {
    const val = nodes[i];
    let nextNode;

    if(Array.isArray(val)) {
      nextNode = buildMultiLevel(val);
      currentNode.child = nextNode;
      continue;
    }

    nextNode = new ListNode(val);
    currentNode.next = nextNode;
    nextNode.prev = currentNode;
    currentNode = nextNode;
  }
  
  return head;
}

let multiLinkedList = buildMultiLevel(nodes);

// ---- Generate our linked list ----

const printListMulti = head => {
  if(!head) {
    return;
  }

  console.log(head.val)

  if(head.child) {
    printListMulti(head.child);
  }

  printListMulti(head.next);
}

const printList2 = head => {
    if(!head) {
      return;
    }
  
    console.log(head.val);
    
    printList(head.next);
}

const flatten = function (head) {
    if (!head) return head;
  
    let currentNode = head;
    while (currentNode !== null) {
      if (currentNode.child === null) {
        currentNode = currentNode.next;
      } else {
        let tail = currentNode.child;
        while(tail.next !== null) {
          tail = tail.next;
        }
  
        tail.next = currentNode.next;
        if (tail.next !== null) {
          tail.next.prev = tail;
        }
  
        currentNode.next = currentNode.child;
        currentNode.next.prev = currentNode;
        currentNode.child = null;
    }
}
  
    return head;
};
  
  printListMulti(multiLinkedList);
  console.log('after flatten');
  printList2(flatten(multiLinkedList));
