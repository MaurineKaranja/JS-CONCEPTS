/**
 * @ARRAYS (LISTS) -> a sequence of data types separated by commas and enclosed in square brackets.
 * e.g -> [1,2,3,4,5] || ["Peter", "John", "Mark"] ||[[1,2,3], [4,5,6]]
 */

//  let names = ['Peter', 'John,', 'Mary', 'Jane']
//  let numbers = [1,2,3,4,5]
//  let mixture = ['Dan', 1, true, undefined, null]

//  //ACCESSING ITEMS IN A LIST
//  console.log(names[3])
//  console.log(numbers[3])
//  console.log(mixture[1])

//  //GETTING THE LENGTH OF A LIST
//  console.log('LENGTH')
//  console.log('Length of names is', names.length)
//  console.log(numbers.length)
//  console.log(mixture.length)

// let names = ['Peter', 'John,', 'Mary', 'Jane']
// let numbers = [1,2,3,4,5]
// let mixture = ['Dan', 1, true, undefined, null]
//  //ITERATION / LOOPS
//  for (let i = 0; i < names.length; i++){
//      console.log(names[i])
//  }


 //MANIPULATIONS
 //PUSH -> adds an item at the end of the list
//  names.push('Maurine')
//  console.log(names)
//  console.log(names[names.length -1]) //know the last item in a list

 //POP -> removes an item at the end of the list


 //UNSHIFT -> 



 //WHILE LOOP


//FACTORIAL OF A NUMBER
//6! = 6*5*4*3*2*1



 //RECURSION
 //6 -> 6-1 (n = n-1)



function climbStairs(n) {
  if (n <= 2) {
    return n;
  }
  
  let dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;
  
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
}

console.log(climbStairs(5));
