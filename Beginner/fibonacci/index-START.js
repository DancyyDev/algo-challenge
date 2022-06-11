/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/

function fibonacci(n) {
    // Code goes here
    let x = 0
    let y = 1
    let z = 0
    for ( let i = 0;  i < n; i++) {
        z = x + y
        x = y
        y = z
    }
    return z
}

module.exports = fibonacci