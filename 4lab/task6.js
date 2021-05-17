const Stack = require(`./stack`)
function regexParse (string){
    let array = string.split("")
    let numbers = new Stack.Stack()
    let letters = new Stack.Stack()
    let other = new Stack.Stack()

    array.map(item => {
        if (item.match(/[0-9]/)){
            numbers.push(item)
        }
        else if (item.match(/[a-zA-Z]/)){
            letters.push(item)
        }
        else{
            other.push(item)
        }
    })

    let numbersRevers = new Stack.Stack()
    let lettersRevers = new Stack.Stack()
    let otherRevers = new Stack.Stack()

    while (!numbers.isEmpty()) {
        numbersRevers.push(numbers.pop())
    }
    while (!letters.isEmpty()) {
        lettersRevers.push(letters.pop())
    }
    while (!other.isEmpty()) {
        otherRevers.push(other.pop())
    }

    while (!numbersRevers.isEmpty()) {
        console.log(numbersRevers.pop());
    }
    while (!lettersRevers.isEmpty()) {
        console.log(lettersRevers.pop());
    }
    while (!otherRevers.isEmpty()) {
        console.log(otherRevers.pop());
    }
}

console.log(regexParse('ax31ca65s-a*s'))