let inputData = ['add a','add b','add a','vote a','vote b','vote a']

function slow(){
    let el = buff[buff.length-1]
    for (let j = buff.length-1; j > 0 ; j--) {
        buff[j] = buff[j-1]
    }
    buff[0] = el
}
let buff = []
function check(){
    
    if(inputData.length % 2 != 0){
        return 'No'
    }
    else{
        for(let i = 0; i< inputData.length; i++){
            if(inputData[i].split(' ')[0] == 'add'){
                buff.push(inputData[i].split(' ')[1])
            }else if(inputData[i].split(' ')[0] == 'vote'){
                if(buff[buff.length-1] == inputData[i].split(' ')[1] ){
                    slow()
                }else{
                    return 'No'
                }
            }
        }
        return 'Yes'
    }
}
let answ = check()
console.log(inputData);
console.log(answ)

