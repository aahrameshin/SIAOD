function Stack() {
    this._size = 0;
    this._top = null;
}

function Node(data) {
    this.data = data;
    this.previous = null;
}

Stack.prototype.push = function (data) {
    var node = new Node(data);
    node.previous = this._top;
    this._top = node;
    this._size++;
}

Stack.prototype.peek = function () {
    return this._top.data;
}

Stack.prototype.pop = function () {
    if (this._top !== null) {
        let temp = this._top.data;
        this._top = this._top.previous;
        this._size--;

        return temp;
    }
        return `It is empty`
}


Stack.prototype.isEmpty = function () {
    return this._size == 0;
}

module.exports = {
    Stack: Stack
};