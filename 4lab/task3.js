const Stack = require(`./stack`)
function transferDisk(a, b){
    if (b.isEmpty() === true) {
        b.push(a.peek());
        a.pop();
        return 1;
    } else if (a.isEmpty() === true) {
        a.push(b.peek());
        b.pop();
        return 2;
    } else {
        if (b.peek() > a.peek()) {
            b.push(a.peek());
            a.pop();
            return 1;
        } else {
            a.push(b.peek());
            b.pop();
            return 2;
        }
    }
}
function han (kol){
    let s = new Stack.Stack()
    let a = new Stack.Stack()
    let d = new Stack.Stack()
    let n = kol
    for (let i = n; i >= 1; i--) {
        s.push(i);
    }

    let x = Math.pow(2, n) - 1
    let i = 1

    if (n % 2 === 0) {
        while (i <= x) {
            if (i % 3 === 1) {
                let y = transferDisk(s, a)
                if (y === 1) {
                    console.log("Переместить диск " + a.peek() + " с StackA на StackB")
                } else
                    console.log("Переместить диск " + s.peek() + " с StackB на StackA")
            } else if (i % 3 === 2) {
                let y = transferDisk(s, d)
                if (y === 1) {
                    console.log("Переместить диск " + d.peek() + " с StackA на StackC")
                } else
                    console.log("Переместить диск " + s.peek() + " с StackC на StackA")
            } else {
                let y = transferDisk(a, d)
                if (y === 1) {
                    console.log("Переместить диск " + d.peek() + " с StackB на StackC")
                } else
                    console.log("Переместить диск " + a.peek() + " с StackC на StackB")
            }
            i++
        }
    } else {
        while (i <= x) {
            if (i % 3 === 1) {
                let y = transferDisk(s, d);
                if (y === 1) {
                    console.log("Переместить диск " + d.peek() + " с StackA на StackC")
                } else
                    console.log("Переместить диск " + s.peek() + " с StackC на StackA")
            } else if (i % 3 === 2) {
                let y = transferDisk(s, a);
                if (y === 1) {
                    console.log("Переместить диск " + a.peek() + " с StackA на StackB")
                } else
                    console.log("Переместить диск " + s.peek() + " с StackB на StackA")
            } else {
                let y = transferDisk(a, d);
                if (y === 1) {
                    console.log("Переместить диск " + d.peek() + " с StackB на StackC")
                } else
                    console.log("Переместить диск " + a.peek() + " с StackC на StackB")
            }
            i++;
        }
    }
    return 0;
}

console.log(han(3))