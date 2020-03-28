// Happy Coding : Correct The Leaderboard
//
// Who is the No.1 programmer on Codewars? Yes, Of course, his name is myjinxin2015. Wow, please don't throw tomatoes and stinky eggs ;-)
// 
// Unfortunately, due to site failures (or hacker attacks?), The leaderboard often shows incorrect rankings.
//
// Your task is: accept a string leaderBoard as argument, correct it and output it.

function correct(leaderBoard){
  let jinx=0
  let arr = leaderBoard.split`\n`.map((v,i)=>v.includes('myjinxin2015')?jinx=i:v)
  arr[jinx]=arr[0].replace(/#\d/,`#${jinx+1}`)
  arr[0]='#1 myjinxin2015'
  return arr.join('\n')
}
