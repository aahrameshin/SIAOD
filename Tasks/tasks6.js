function isPolindrome(string){
    return string === string.split('').reverse().join('');
}

function largestPolindrome(string){
    if(string.length ===0){
        return `it is empty`;
    }
    let largest ='';
    for(let i = 0; i<string.length; i++){
        for(let j = 0; j<string.length; j++){
        let substr = string.slice(i,j);
            if(isPolindrome(substr)){
                if(largest.length<substr.length){
                    largest = substr;
                }
            }
        } 
    }
    if(largest.length === 0){
        return `Haven't polindrome`;
    }
    return largest;
}

let string = 'gdeeddeegdddegde';
console.log(largestPolindrome(string));