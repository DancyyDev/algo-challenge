/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/

// PREP?

// n = number
// number to create a factorial splution
// n = 5 , 1x2x3x4x5 === 120
// factorial(n) === factS

// for loop to reiterate the numbers 1  to n
//


// n x (n-1) x (n-2) x ... x 1

function factorial(n) {
    let x = 1
    for( let i = 1; i <= n; i++) {
        if(n < 0){
            return 0
        } else {
            x = x*i //1x 1 , 1x 2, 2x3, 6x 4 ,
        console.log(x)
        }
    }
    return x
}

module.exports = factorial