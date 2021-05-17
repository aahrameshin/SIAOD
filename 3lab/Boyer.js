function boyerFind(str, substr){
    let library = {},
        subLength = substr.length-1,
        strLength = str.length,
        resultArr = [],
        j, defaultLetter;

    for(let i = 0; i < subLength+1; i++){
        library[substr.charAt(i)] = subLength - i;
        
    }
    console.log(library);

    let i = 0;
       while (i<strLength){
        for(j = subLength; j >= 0; j--){
            if(str.charAt(j+i) != substr.charAt(j)){
                break;
            }
        }
            if(j<0){
                resultArr.push(++i);
            }
            else {
                defaultLetter = library[str.charAt(j+i)];
                if(!defaultLetter){
                    defaultLetter = subLength + 1;
                }
                defaultLetter+= j - subLength;
                if(defaultLetter < 0){
                    defaultLetter = 1;
                }
                i+= defaultLetter;
            }

        }  
    if(resultArr.length == 0){
        return `Sorry ${substr} is not found`;
    }      
    return resultArr;
}


console.log(boyerFind('Mnuci tuci', 'tuci'));