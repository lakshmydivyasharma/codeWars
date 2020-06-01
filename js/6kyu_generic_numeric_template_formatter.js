https://www.codewars.com/kata/59901fb5917839fe41000029/train/javascript
6 kyu
Generic numeric template formatter
442294% of 180311 of 738GiacomoSorbi
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Your goal is to create a function to format a number given a template; if the number is not present, use the digits 1234567890 to fill in the spaces.

A few rules:

the template might consist of other numbers, special characters or the like: you need to replace only alphabetical characters (both lower- and uppercase);
if the given or default string representing the number is shorter than the template, just repeat it to fill all the spaces.
A few examples:

numericFormatter("xxx xxxxx xx","5465253289") === "546 52532 89"
numericFormatter("xxx xxxxx xx") === "123 45678 90"
numericFormatter("+555 aaaa bbbb", "18031978") === "+555 1803 1978"
numericFormatter("+555 aaaa bbbb") === "+555 1234 5678"
numericFormatter("xxxx yyyy zzzz") === "1234 5678 9012"





function numericFormatter(t,n='1234567890'){
  let i = 0
  return t.split` `.map(v=>v.split``.map(v=>{
    if (/[a-zA-Z]/.test(v))return n[i++%n.length]
    return v
  }).join``).join` `
}
