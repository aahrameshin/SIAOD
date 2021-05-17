const DeQueue = require('./queue')
function bracketFinderDeque(array){
    let deque = new DeQueue.DeQueue()
    let flag = true;
    array.map( item =>{
        if(item === '['){
            deque.pushFront('[')
        }
        else if(item === ']'){
            if(!deque.isEmpty()){
                deque.popBack();
            }
            else flag = false;
        }
    })
    return flag && !!deque.isEmpty();
}

console.log(bracketFinderStack ( [`[`,`]`,`[`,`]`,`[`] ))