const DeQueue = require('./queue');
function task1(array){
    let dequeueInc = new DeQueue.DeQueue();
    let dequeueSort = new DeQueue.DeQueue();
    let sortArr = [];
    array.map(item => dequeueInc.pushFront(item))

    while(!dequeueInc.isEmpty()){
        console.log(dequeueInc.peekFront())
        if(dequeueInc.peekFront() <= dequeueSort.peekFront() || dequeueSort.isEmpty()){
            dequeueSort.pushFront(dequeueInc.popFront());
        }
            else{
                dequeueInc.pushBack(dequeueSort.popFront());
            }
        
    }

    while(!dequeueSort.isEmpty()){
        sortArr = [...sortArr,dequeueSort.popFront()];
    }

    return sortArr;
}

console.log(task1([3,2,1,5,6,7,8]))

// console.log(dequeSort([5,6,7,1,3,9,2,8]))















