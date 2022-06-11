/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    let word = text.split('').reverse().join('')
    if(word === text){
        return true
    } else{
        return false
    }
}



module.exports = palindromeChecker;