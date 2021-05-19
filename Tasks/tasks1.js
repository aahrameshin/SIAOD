function generateArray(lenght){
    let arr = [];
    for(let i = 0; i <lenght; i++){
        arr[i] = 0 + Math.floor(Math.random() * (Math.pow(10,6) - 0 + 1));
    }
    return arr;
}

function thriaAngle(array){
    let per = 0, maxA, maxB,maxC;
    for (let i = 0; i < array.length - 2; i++){
        maxA = array[i];

        for (let j = 1; j < array.length - 1; j++){
            maxB = array[j];

            for (let k = 2; k < array.length ; k++){
                maxC = array[k];
                
                if(i != j && j != k && i != k){
                    if ((maxA + maxB > maxC) && (maxB + maxC > maxA) && (maxA + maxC > maxB)){
                        console.log(maxA , maxB, maxC);

                        if(per<maxA + maxB + maxC){
                            per = maxA + maxB + maxC;
                        }
                    }
                }
            } 
        }
     }
    return per;
} 

let array = generateArray(4);
console.log(array);
console.log(thriaAngle(array));