const Stack = require('./stack')

function computeLogic1 (Str){
    let str1="";
    let stk= new Stack.Stack();
    for(let i=0;i<Str.length;i++){
        stk.push(Str[i])
    }
    for(let i=0;i<Str.length;i++){
        if(stk.peek()=="T")
            str1+="true "
        if(stk.peek()=="F")
            str1+="false "
        if(stk.peek()=="N")
            str1+="! " 
        if(stk.peek()=="A" ||stk.peek()=="*")
            str1+="&& "
        if(stk.peek()=="X")
            str1+="!= "
        if(stk.peek()=="O"||stk.peek()=="+")
            str1+="|| " 
        if(stk.peek()=="(")
            str1+="( "
        if(stk.peek()==")")
            str1+=")" 
        stk.pop()
    }
    
    console.log(eval(str1))
}

console.log(computeLogic1('F+T'))