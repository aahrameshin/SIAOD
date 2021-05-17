const Stack = require('./stack') 
function computeMinMax(Str) {
    let str1=""
    let stk= new Stack.Stack()
    for(let i=0;i<Str.length;i++){
        stk.push(Str[i])
    }
    for(let i=0;i<Str.length;i++){
        if(stk.peek()==="0")
            str1="0" +str1
        if(stk.peek()==="1")
            str1="1" +str1
        if(stk.peek()==="2")
            str1="2" +str1
        if(stk.peek()==="3")
            str1="3" +str1
        if(stk.peek()==="4")
            str1="4" +str1
        if(stk.peek()==="5")
            str1="5" +str1
        if(stk.peek()==="6")
            str1="6" +str1
        if(stk.peek()==="7")
            str1="7" +str1
        if(stk.peek()==="8")
            str1="8" +str1
        if(stk.peek()==="9")
            str1="9" +str1
        if(stk.peek()==="M")
            str1="Math.max" +str1
        if(stk.peek()==="N")
            str1="Math.min" +str1
        if(stk.peek()===","||stk.peek()===".")
            str1="," +str1
        if(stk.peek()==="(")
            str1="(" +str1
        if(stk.peek()===")")
            str1=")" +str1
        stk.pop()
    }
    console.log(eval(str1))
}