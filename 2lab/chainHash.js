const hashTable = new Map(),
      test = [8,19,14,12,10,5,7];

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    append(value) {
        if(this.next == null){ 
            this.next = new LinkedListNode(value);
        } else { 
            this.next.append(value);
        }
    }

    find(value) {
        let currentNode = this;

        while (currentNode) {
            if (value !== undefined && currentNode.value === value) {
                return `Элемент ${value} найден в ячейке ${hashValue(value)}`;
            }

            currentNode = currentNode.next;
        }

        return null;
    }
}

function hashValue(value){
    return value%7;
}

function hashChain(array) {
    for (let i = 0; i < array.length; i++) {
        if(hashTable.has(hashValue(array[i])) == false){
            let node = new LinkedListNode(array[i], null);
            hashTable.set(hashValue(array[i]), node);
        } else {
            hashTable.get(hashValue(array[i])).append(array[i]);
        }
    }
    return hashTable;
}

function foundChain(num) {
    const hash = hashValue(num);
    if (hashTable.has(hash)){
        return hashTable.get(hash).find(num);
    }
    else {
        return ` Элемент не найден `;
    }
}

console.log(hashChain(test));
console.log(foundChain(7))