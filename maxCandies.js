/*
  You are given an array as your first argument, containing only numbers.
  your second argument is another integer, you are supposed to be able to determine
  if args1[i] + args2 >= the max value in args1.
  Step one, get max. 
*/ 


/* 
  doing this the old fashioned way with no built in math or array methods.
  This kind of sucks, we got a long of variables hanging around and I guess if the interviewer
  wanted to determine I could find the max without in built methods,
  we'd do it this way, but the unessecary steps have a high impact on
  efficency.
*/

// var kidsWithCandies = function(candies, extraCandies) {
//   let max = 0;
//   let maxCandiesArray= [];
//   candies.map((number) => {
//     if (number > max) {
//       max = number
//     }
    
//   });
//   for (number  of candies) {
//     maxCandiesArray.push(number + extraCandies >= max);
//   }
//   return maxCandiesArray;
// };
/*
  A much better method, we're just using the built in math method and spread operator
  In an interview session I'd do it the manual way, explain why it's kind of a pain, then show them this way
  demonstrating I understand the fundamentals of the problem, but also can concisely present a solution

*/
var kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max(...candies)
  let maxCandiesArray= [];
  for (number  of candies) {
    maxCandiesArray.push(number + extraCandies >= max);
  }
  return maxCandiesArray;
};

/*
  The below method I found in the discussions. It feels a little code golfy 
  and it's not very clean to look at, I'd honestly present the second solution as there's 
  not much difference in the efficency of both except space constants.
  So unless you really are trying to save memory usage I'd honestly like to present the second solution

*/

// var kidsWithCandies = function(candies, extraCandies) {
//   let max = Math.max(...candies)
//   return candies.map((n => n + extraCandies >= max));
  
// };