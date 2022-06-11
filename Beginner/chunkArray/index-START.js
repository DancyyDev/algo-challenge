/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array, size) {
    // Code goes here
    //new array with nested arrays
    //nestarray.length === size
    //
    let chunkArr = []
    while( array.length> 0) {
        chunkArr.push(array.slice(0, size))
        array.splice(0, size)
    }
    return chunkArr
}


module.exports = chunkArray