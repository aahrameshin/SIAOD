const DeQueue =require('./queue');
let dec = new DeQueue.DeQueue()
  let  str = `abcdef`;
function cip (str,dec){
   let  str1 = "";
    for(let i=0; i<str.length; i++){
        while (str1.length<i+1){
            if(dec.peekBack() == str[i]){
                dec.pushFront(dec.popBack())
                dec.pushFront(dec.popBack())
                str1+=dec.peekBack();
            }
            dec.pushFront(dec.popBack())
        }
    }
    return str1
}
console.log(cip(str,dec))