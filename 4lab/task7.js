const DeQueue = require('./queue')
function numbersParse (array) {
    let deque = new DeQueue.DeQueue();
    array.map(item =>{
        if(item < 0){
            deque.pushBack(item)
        }
        else{
            deque.pushFront(item)
        }
    })
    while (!deque.isEmpty()){
        console.log(deque.popBack())
    }
}

console.log(numbersParse([1,6,5,2,4,0,-3,-1,-2]))