Array.prototype.myEach = function(callback) {
    for(let i =0; i < this.length; i++){
        callback(this[i])
    }
}

Array.prototype.myMap = function(callback) {
    let newArray = [];

    for(let i =0; i < this.length; i++){
        newArray.push(callback(this[i]))
    }

    return newArray;
}


Array.prototype.myReduce = function(callback) {
    let accumulator = 0;
    for(let i =0; i < this.length; i++){
        
        // callback(accumulator += this[i])
        accumulator += (callback(this[i]))
        // debugger
    }
    return accumulator
}

console.log([1, 2, 3].myReduce(el => el * 2))


