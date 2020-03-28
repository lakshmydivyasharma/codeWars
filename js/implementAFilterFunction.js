// What we want to implement is a filter function, like Array.filter(), also similar to the _.filter() in underscore.js and lodash.js.

// https://www.codewars.com/kata/56dd9b84fe5754786f0014f7/javascript


const words = ['lemon', 'orange', 'apple', 'grapes', 'watermelon', 'kiwi'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["grapes", "watermelon ", "kiwi"]
