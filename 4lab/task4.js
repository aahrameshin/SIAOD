const Stack = require(`./stack`)

function bracketFinderStack (array){
    let stack = new Stack.Stack()
    let flag = true;
    array.map( item =>{
        if(item === '('){
            stack.push('(')
        }
        else if(item === ')'){
            if(!stack.isEmpty()){
                stack.pop()
            }
            else {
                flag = false
            }
        }
    })
    return flag && !!stack.isEmpty()
}

console.log(bracketFinderStack ( [`(`,`(`,`(`,`)`,`(`] ))