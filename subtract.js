var subtract = (head) => {
  // find LL midpoint
  var length = 1;
  var curr = head;
  while (curr.next !== null) {
    length++;
    curr = curr.next;
  }
  var mid = Math.floor(length / 2);

  reverseRightHalf(head, mid);

  // move first pointer to midpoint
  var count = 0;
  var a = head;
  while (count < mid + 1) {
    a = a.next;
    count++
  }
  var b = head;
  while (a !== null) {
    b.data = a.data - b.data;
    a = a.next;
    b = b.next;
  }

  reverseRightHalf(head, mid);

  return head;
}

var reverseRightHalf = (head, mid) => {
  // find middle node
  var midNode = head;
  var count = 1;
  while (count < mid + 1) {
    midNode = midNode.next;
    count++;
  }

  var prev = null;
  var curr = midNode.next;
  var next = null;
  var last;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  midNode.next = prev;
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

var test = new Node(1);
test.next = new Node(2);
test.next.next = new Node(3);
test.next.next.next = new Node(4);
test.next.next.next.next = new Node(5);

console.dir(subtract(test));