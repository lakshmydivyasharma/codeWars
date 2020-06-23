https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa/train/javascript
5 kyu
Merged String Checker
86714083% of 7191,406 of 4,976Abbe2 Issues Reported


Instructions
Output
At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 should be in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears
ALGORITHMSSTRINGS

powered by








function isMerge(s, part1, part2) {
  const part1Arr = part1.split("");
  const part2Arr = part2.split("");
  for (let i = s.length - 1; i > 0; i--) {
    if (s[i] === part1Arr[part1Arr.length - 1]) {
      part1Arr.pop();
    } else if (s[i] === part2Arr[part2Arr.length - 1]) {
      part2Arr.pop();
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isMerge;
