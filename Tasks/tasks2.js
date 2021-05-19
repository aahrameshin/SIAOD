let nums = [3,30,34,5,954,1,2972,3,574,12,20,30,33,90,900]
// let nums = [0,0,0,1];
function maxNum(array){
    let check = array.every(element => element == 0);
    if(check){
        return 0;
    }
    return array
        .map((item) => item.toString())
        .sort((str1,str2) => (str2+str1) - (str1+str2))
        .join('');
}

console.log(maxNum(nums));
