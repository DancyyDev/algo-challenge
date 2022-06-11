/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    // Code goes here
    let i = 0
    text.toLowerCase().split('').forEach(x => {
        if( x === 'a' ||
            x === 'e'||
            x === 'i'||
            x === 'o'||
            x === 'u' ) {
                i++
            }
    })
    return i
}



module.exports = vowelsCounter;
