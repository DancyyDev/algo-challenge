/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



function isAnagram(stringA, stringB) {
    // Code goes here
    let strA = stringA.split('').sort().join('')
    let strB = stringB.split('').sort().join('')
    if( strA === strB){
        return true
    }else {
        return false
    }
}


module.exports = isAnagram