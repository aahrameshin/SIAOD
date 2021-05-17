class chessBoard {
    constructor(a, b, c, d, e, f, g, h) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
        this.g = g;
        this.h = h;
    }
}

function chessQuins() {
    const board = {}; 
    let map = new Map(),
        diag1 = [],
        diag2 = [];
     let num = Math.floor(Math.random() * (9 - 1) + 1);
       
    for (let i = 0; i < 8; i++) {
            const xArr = ['x','x','x','x','x','x','x','x'];
            num = Math.floor(Math.random() * (9 - 1) + 1);
            while(map.get(num) == 1){
                num = Math.floor(Math.random() * (9 - 1) + 1);
            }
            
            if( diag1.indexOf(i + (num - 1)) == -1 || diag2.indexOf(Math.abs(i-(num-1))) == -1 ){
                xArr[num-1] = 'Q';
                map.set(num,1);
                console.log(map);
                diag1.push(i+(num-1));
                diag2.push(Math.abs(i-(num-1)));
                board[(i+1).toString()] = new chessBoard(...xArr);
            } else { 
                i--;
             }
       
                      
    }
    return board;
}

// if( columns.indexOf(i + (num - 1)) == -1 && rows.indexOf(Math.abs(i-(num-1))) == -1 ){
            //     xArr[num-1] = 'Q';
            //     map.set(num-1,1);
            //     columns.push(i+(num-1));
            //     rows.push(Math.abs(i-(num-1)));
            //     board[(i+1).toString()] = new chessBoard(...xArr);
            //     check = num -1;
            // }
            //     else {
            //         i--;
                    
            //     }
console.table(chessQuins())


// function chessQuins2() { 
//     let quins = [];

//     function addQ(x, y) {
//         quins.push({x: x, y: y});
//     }
//     function removeLastQ() {
//         quins.pop();
//     }
//     function isCanPlaced(x, y) {
//         for (let i = 0; i < quins.length; i++) {
//             const qX = quins[i].x;
//             const qY = quins[i].y;
//             // Проверяем на вертикаль и горизонталь и две диагонали
//             if (x == qX || y == qY || Math.abs(x + y) == Math.abs(qX + qY) || Math.abs(x - y) == Math.abs(qX - qY)) {
//                 return false;
//             }
//         }
//         // Если ни одна королева не может побить эту клетку, то возвращаем, что на нее можно поставить другую
//         return true;
//     }

//     // Генерируем доску
//     const boardSize = 8;
//     const quinsCount = 8;

//     // Пытается расположить королев на доске и есть не получилось false 
//     function placeQuin() {
//         //console.log('c = ' + quins.length);
//         if (quins.length == quinsCount) {
//             return true; // Всо ок. Всех расположили
//         }
        
//         const stX = Math.floor(Math.random() * (boardSize - 1));
//         const stY = Math.floor(Math.random() * (boardSize - 1));
//         for (let dx = 0; dx < boardSize; dx++) {
//             for(let dy = 0; dy < boardSize; dy++) {
//                 const x = (stX + dx) % boardSize;
//                 const y = (stY + dy) % boardSize;

//                 if(isCanPlaced(x, y)) {
//                     addQ(x, y);
//                     //console.log('try add to ' + x + ' ' + y);
//                     // Если не получилось добавить королеву -- удаляем предыдущую догадку и продолжаем цикл
//                     if(placeQuin()) {
//                         return true;
//                     } else {
//                         //console.log('remove ' + x + ' ' + y);
//                         removeLastQ();
//                     }
//                 }
//             }
//         }
//         // Если совсем не получилось добавть королеву ни в какую клетку, то всо
//         return false;
//     }
    
//     if (placeQuin()) {
//         // Создаем доску на основе списка королев
//         let board = [];
//         for (let y = 0; y < boardSize; y++) {
//             let line = [];
//             for(let x = 0; x < boardSize; x++) {
//                 if (quins.findIndex(function(v, _, _) { return v.x == x && v.y == y; }) != -1) {
//                     line.push('Q');
//                 } else {
//                     line.push('x');
//                 }
//             }
//             board.push(line);
//         }

//         return board;
//     } else {
//         return undefined;
//     }
    
    
// }


// console.table(chessQuins2());
