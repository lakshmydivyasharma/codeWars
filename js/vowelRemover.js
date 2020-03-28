// Vowel remover
// 862190% of 7753,309 of 7,232naaz4 Issues Reported
// JavaScript
// Node v8.1.3
// VIM
// EMACS
// Instructions
// Output
// Create a function called shortcut to remove all the lowercase vowels in a given string.
//
// Examples
// shortcut("codewars") // --> cdwrs
// shortcut("goodbye")  // --> gdby
// Don't worry about uppercase vowels.


function shortcut(string){
    return string.replace(/[aeiou]/g,'')
}
