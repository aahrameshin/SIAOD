const Stack = require('./stack');

function computeForm (Str)
{
    let stk= new Stack.Stack()
    let str=""
    for(let i=0;i<Str.length;i++){
        stk.push(Str[i])
    }
    for (let i=0;i<Str.length;i++){
        str=stk.pop()+str
    }
    try{
        eval(str)
    }
    catch (err){
        console.log(false)
    }
    console.log(true)
}