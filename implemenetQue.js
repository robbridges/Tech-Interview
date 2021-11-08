class Que {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items.push(element);
    this.count++;
  }
  pop() {
    this.count--;
    return this.items.pop();
    
  }
  size() {
    return this.count;
  }
  peek() {
    return this.items[this.items.length -1];
  }
  isEmpty() {
    return this.count === 0;
  }
  clear() {
    this.count = 0;
    this.items = [];
  }
}

const que = new Que();
que.push(1);
const ele = que.pop();
console.log(ele);
que.push(1);
console.log(`The size of the que is now ${que.count}`)
que.push(2);
console.log(`The size of the que is now ${que.count}`)
que.push(3);
console.log(`The size of the que is now ${que.count}`)
console.log(que.size());
console.log(que.items);
console.log(que.peek());
console.log(que.isEmpty());
que.clear();
console.log(que.isEmpty());