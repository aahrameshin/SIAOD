// function generateArray(length) {
//     let array = [length],
//         minLimit = -250,
//         maxLimit = 1010;
//     for (let i = 0; i < length; i++) {
//         array[i] = minLimit + Math.floor(Math.random() * (maxLimit - minLimit + 1));
//     }
//     return array;
// }

const test = [8,19,14,12,10,5,7];    
let hashTable = new Map(),
    hashRefTable = [];

function hashValue(value){
    return value%7;
}

function reHash(value){   
    const hash = hashValue(value);
    for (let i = 0; i < 7; i++){      
        if(hashTable.has((hash+i) % 7) == false){
            hashTable.set((hash+i) % 7, value);
            break;
        }
    }
}



function simpleReHash(num, array){
    array.forEach(value => reHash(value));
    const hash = hashValue(num);
    for (let [key, value] of hashTable){
        console.log(`в ячейке ${key} cодержится ${value} `);
    }
    for (let i = 0; i<7; i++){
        if(hashTable.get((hash + i)) == undefined){
            return `Элемент ${num} не найден` ;
        }
            else if( num == hashTable.get((hash+i)%7)) {
                return `Элемент ${num} найден в ячейке ${(hash+i)%7}`;
            }        
    }
    return ` Элемент не найден `;
}

console.log(simpleReHash(10, test));


