let mat = [[3, 3, 5, 6], [2, 2, 1, 8], [1, 1, 1, 2]]
mat = [[3, 3, 5, 6], [2, 2, 1, 8], [1, 1, 1, 2],[2, 2, 1, 8],[2, 2, 1, 8]]

mat = [[11, 25, 66, 1, 69, 7], [23, 55, 17, 45, 15, 52], [75, 31, 36, 44, 58, 8], [22, 27, 33, 25, 68, 4], [84, 28, 14, 11, 5, 50]]
mat = [[3, 3, 5, 6], [2, 2, 1, 8], [1, 1, 1, 2],[2, 2, 1, 8]]

let rowLen = mat[0].length, columnLen = mat.length
mat.forEach((e)=>{
    console.log(e);
})
console.log('sorting')

let buff = []
let triangleDia = Math.min(rowLen, columnLen ) - 1
let countMainDia = Math.abs(rowLen-columnLen)+1
let lenMainDia = Math.min(rowLen, columnLen )

function triangleUp(){
    for(let i = 0; i < triangleDia; i++){
        //console.log(triangleDia);
        for(let j = 0; j < i+1; j++ ){
            //console.log(i,j, rowLen-1-i+j, mat[j][rowLen-1-i+j])
            buff.push(mat[j][rowLen-1-i+j])
        }
        //console.log('buff',buff );
        buff.sort((a,b)=>{return a-b})

        for(let j = 0; j < i+1; j++ ){
            //console.log(j,rowLen-1-i, i,buff[j])
            mat[j][rowLen-1-i+j] = buff[j]
        }
        buff = []
    }
}
triangleUp()

function diaMain(){
    //console.log(countMainDia);
    for(let i = 0; i < countMainDia; i++){
        if(rowLen>columnLen){
            for(let j = 0; j < lenMainDia; j++){
                buff.push(mat[j][j+i])
            }
            buff.sort((a,b)=>{return a-b})

            for(let j = 0; j < lenMainDia; j++ ){
                mat[j][j+i] = buff[j]
            }
            buff = []
        }else{
            for(let j = 0; j < lenMainDia; j++){
                buff.push(mat[j+i][j])
            }
            buff.sort((a,b)=>{return a-b})

            for(let j = 0; j < lenMainDia; j++ ){
                mat[j+i][j] = buff[j]
            }
            buff = []
        }
    }
}
diaMain()
function triangleDown(){
    for(let i = 0; i < triangleDia; i++){
        //console.log(triangleDia);
        for(let j = 0; j < i+1; j++ ){
            buff.push(mat[columnLen-1-i+j][j])
        }
        //console.log('buff',buff );
        buff.sort((a,b)=>{return a-b})

        for(let j = 0; j < i+1; j++ ){
            //console.log(j,rowLen-1-i, i,buff[j])
            mat[columnLen-1-i+j][j] = buff[j]
        }
        buff = []
    }
}
triangleDown()

mat.forEach((e)=>{
    console.log(e);
})