Array.prototype.uniq = function(){
    let newArray = [];
    this.forEach((num)=>{
        if(!newArray.includes(num)){
            newArray.push(num)
        }
    })
    return newArray;
}
// console.log([1,2,2,3,3,3].uniq())

Array.prototype.twoSum = function(){
    let indicesPos = [];
    for(let i = 0; i < this.length; i++){
        for(let j = i+1; j < this.length; j++){
            if(this[i]+this[j] === 0){
                indicesPos.push([i,j])
            }
        }
    }
    return indicesPos
}

// console.log([1,-1,2,-2,3,45,2 ].twoSum())

Array.prototype.transpose = function(){
    let returnArray = [];
    for(let row = 0; row < this.length; row++){
        let newRow = [];
        for(let col = 0; col < this.length; col++){
            newRow.push(this[col][row])
        }
        returnArray.push(newRow )
    }
    return returnArray
}
let newVar = [["a","b","c"],["d","e","f"],["g","h","i"]]
console.log(newVar.transpose());
console.log(newVar)



