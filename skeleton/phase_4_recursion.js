function range(start, end){
    //base case
    if (start===end) return [start]

    //iterative steps

    // let result = [start]
    // if ((start + 1) < end ) 

    return [start].concat(range(start+1, end))

}
// console.log(range(1,5)) 

function sumRec(arr){
    if (arr.length < 2) return arr[0]

    let temp = arr.shift()
    return temp + sumRec(arr)
}

// console.log(sumRec([1,2,3,4,5]))

function exponent(base, exp){
    if (exp===0) return 1;
    if (exp===1) return base;

    return base * exponent(base, exp - 1) 
}

// console.log(exponent(2, 3))

function fibonacci(n) {
    if (n <= 1) return 1;
    // if (n === 2) return [1]
    
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(5))