/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    // Code goes here
    let num = 0
    let str = ''
    text.split(' ').map( x => {
        if( x.length > num){
            num = x.length
            str = x
        }
    })
    console.log(str)
    return str
}


module.exports = longestWord