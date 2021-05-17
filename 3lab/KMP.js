function prefixFind(str, substr){
    const strFound = substr.concat('#', str);
    let pi = [];
    pi[0] = 0;
    
    for(let i = 1; i<strFound.length; i++){
        let j = pi[i - 1];

        while ((j > 0) && (strFound[i] != strFound[j])){
            j = pi[j-1];
        }
            if (strFound[i] == strFound[j]){
                pi[i] = ++j;
                
            } else{
                pi[i] = j;
            }

        }

    return pi;
}

function find(str, substr){
   const pi = prefixFind(str, substr);
   let count = 0, length = substr.length;
   for(let i = 0; i < pi.length; i++ ){
        if (pi[i] == length){
            count++;
        }
   }
   return `${substr} встречается в ${str} ${count} раз(а)`
}

console.log(find('aabaabaaaabaabаaab', 'aabaa'));