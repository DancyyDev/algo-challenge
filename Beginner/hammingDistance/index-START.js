/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

// param are two strings.
//i do not know hamming but throught exampels it looks like i am finmding the number of differences between the two params
// example dod , dad // 1
// split() map() x === x
//!== y++
// return y
 
// function hammingDistance(stringA, stringB) {
//     // Code goes here
//     let counter = 0
//     let strA = stringA.split('')
//     let strB = stringB.split('')
//     strA.forEach(x => )
//     return counter
// }

function hammingDistance(stringA, stringB) {
    let counter = 0
    if( stringA.length !== stringB.length){
        return 0
    }
    for(let i = 0; i < stringA.length; i++){
        if( stringA[i] !== stringB[i]){
            counter++
        }
    }    
    return counter
}

module.exports = hammingDistance