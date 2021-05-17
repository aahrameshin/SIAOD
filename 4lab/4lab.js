const Stack = require("./stack");
const Dequeue = require("./queue");
// const fs = require(`fs`);
// const t1 = require(`./task1`)

// let fileCOntent = fs.readFile("index.txt", "utf8");


let newStack = new Stack.Stack();
for (let i = 1; i <= 5; i++){
    newStack.push(i);
}
console.log(newStack);

let newQueue = new Dequeue.DeQueue();
for (let i = 1; i <= 5; i++){
    newQueue.pushFront(i);
}

for (let i = 6; i <= 10; i++){
    newQueue.pushBack(i);
}

console.log(newQueue);

console.log(newQueue.popFront());
console.log(newQueue.peekFront())
// console.log(newQueue);
// console.log(newQueue.popFront());
// console.log(newQueue);
// console.log(newQueue.isEmpty())
// let arr = [5,8,7,3,6,4,9,1];
// let a = t1.task1(arr);
// console.log(a);