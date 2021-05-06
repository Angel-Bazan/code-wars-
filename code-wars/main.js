// Given an array of integers.Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.If the input array is empty or null, return an empty array.

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter( p=> p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
} // we put input and input.length because we are taking a look at the both the input and its length now we use the ? to tell if its the left side or the right side of the command than return null
// we start by filtering the length of the positive numbers and put a comma to output the addition of the negative numbers in the array index of 1 we use the reduce method to add all the negative numbers 
// we put a 0 to give us 0 if the addition is 0 and of course we put the : semicolons to include the empty array if output none of the left hand side or  right side commands from the question mark 
..........................................................
//In this kata you need to create a function that takes a 2D array/list of non-negative integer pairs and returns the sum of all the "saving" that you can have getting the LCM of each couple of number compared to their simple product.

//For example, if you are given:

//[[15,18], [4,5], [12,60]]
//Their product would be:

//[270, 20, 720]
//While their respective LCM would be:

//[90, 20, 60]
//Thus the result should be:

//(270-90)+(20-20)+(720-60)==840

//solution 
function sumDifferencesBetweenProductsAndLCMs(pairs){
    const gcd = (x,y) => x == 0 ? y : gcd(y % x, x)
    const lcm = (x,y) => x * y == 0 ? 0 : x * y / gcd(x,y)  
      return pairs.map(c => c[0] * c[1] - lcm(c[0],c[1])).reduce((a,c) => a + c, 0);
    
      }

...................................................................................

//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot separating them. 

function abbrevName(name){
  
    return name.split(' ').map(x => x[0].toUpperCase()).join('.')
    
    
    }

    // using the method split so we can split each index and be able to select a letter from a word . The map method is than used to select every index at [0] use uppercase for uppercase and at the just join them with . in between 
    // output A.S if we are inputting angel sanchez 
...................................................................................................................................

//Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

//If n == 0 return an empty sequence []
function first(arr, n) {
  if(n == 0)
    return []; 
  if(n == null)
    return arr.slice(0,1);
  if(n > 0)
   
    return arr.slice(0,n);
}
..............................................................................................................................................................
   //Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length. 
var removeDuplicates = function(nums) { // function of nums is given to you 
    // nums.splice(0, nums.length, ...(new Set(nums))); //still in progress of understanding but it states here to remove the length of index starting at index 0 and than set up a new set of nums ????? 

        
    let i = 0; // here we are set index i = 0 
    for(let j = 1; j < nums.length; j++){  // we start a j=1 and get all of the index j that are less than the length of nums for every j 
        if(nums[i] != nums[j]){ //if nums[i] doesnt equal to nums[j]
            i++; //than we also loop through every nums[i]
            nums[i]=nums[j]; // we are stating that nums[i] is the same thing as nums[j]
        }
    }
    return i+1; //returning every 1 one i if we put plus 2 its going to add a duplicate of 2 if we put only i its going to give us i not j 
     
       
   };
.................................................................................................................................................
//You are given an array prices where prices[i] is the price of a given stock on the ith day.

//Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

//Input: prices = [7,1,5,3,6,4] // if bought at day one and didnt sell you get an output of 7 but if bought at day 1 and sell at day 3 you get 5-3 = profit of 2 
//Output: 7

var maxProfit = function(prices) {
    let profit = 0 ; //we set the profit equal to zero because we still havent made any profit when starting 
    for(let i=1; i<prices.length; i++){ // we are going to initiating at 1 so if the length of the prices is bigger than 1 than we can keep adding by 1 
        if(prices[i] > prices[i-1]){ // if the prices of i are greater than the prices of i-1 than ...
            profit += prices[i] - prices[i-1] //than the profit we add it to the prices of i - the prices of i-1
        }
    }
    return profit //return the profit 
};
.........................................................................

 //Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.
function gooseFilter (birds) { // we want to return a birds elements without the geese elements 
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]; // the var of geese is given 
 return birds.filter((elm) => !geese.includes(elm) ) // we use the filter method to filter all the elements that are part of geese elements 
  // return an array containing all of the strings in the input array except those that match strings in geese
};
...............................................................................................
//Given an array, rotate the array to the right by k steps, where k is non-negative.
var rotate = function(nums, k) {
  for (let i = 0; i < k; i++) { // initiating at i=0 and the  condition statement to only get any k elements greater than i and keep adding 1 with the i++ 
      nums.unshift(nums.pop()); // we use two methods the pop and unshift . Use the pop method to get all the elements that are greater than the k values given and unshift them back to a new array 
  }

  return nums;
};
