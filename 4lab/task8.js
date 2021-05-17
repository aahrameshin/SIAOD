const Stack = require('./stack')

function stringRevers (string){
    let array = string.split(' ')
    let stack = new Stack.Stack()
    array.map(string =>{
        stack.push(string);
    })
    while(!stack.isEmpty()){
        console.log(stack.pop());
    }
}

console.log(stringRevers('hello my friend'))