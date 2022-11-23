Array.prototype.bubbleSort = function(callback) {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for(let i = 0; i < this.length; i++){
            if (this[i]>this[i+1]) {
              [this[i], this[i+1]] = [this[i+1], this[i]];
                sorted = false;
            }
        }
    }
    return this
}


// console.log([1,2,36,232,62,12,10,12].bubbleSort())


// function compare(num1,num2){
//     if(num1 > num2){
//         return 1;
        
//     } else if( num1< num2){
//         return -1;
//     } else {
//         return 0
//     }
// }
//Andrea [A,n ]
String.prototype.substring = function(){
    let result = [];
    let letters = this.split('')
    for(let i = 0; i < letters.length; i++){ //0
        for(let j = i; j < letters.length; j++){//0
            if (j >= i) { //true
                let temp = letters.slice(i, j+1)
                result.push([temp.join("")])

            }
        }
    }
    return result
}

console.log("Andrea".substring())