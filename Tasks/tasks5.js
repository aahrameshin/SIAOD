function findWin(str1,str2){
    if(str1.length === 0 || str2.length === 0){
        return `it is empty`;
    }else if (str1.length !== str2.length){
        return `Can't compare it`;
    }
   let arrChar1 = str1.split('').sort();
   let arrChar2 = str2.split('').sort();
    console.log(arrChar1)
    console.log(arrChar2)
   if((arrChar1.every((el, idx) => el <= arrChar2[idx])) || (arrChar2.every((el, idx) => el <= arrChar1[idx]))) {
    return true;
   }
    return false;
   
   
}

let str1 = `abe`;
let str2 = 'acd';
console.log(findWin(str1,str2));

