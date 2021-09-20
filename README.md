

# Code Wars 

# 8kyu You only need one - Beginner()

### Description:
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.




### Syntax:

```jsx
function check(a, x) {
  return a.includes(x) ? true : false; 
}
``` 

# 7kyu Sort arrays-1 

### Description: 
Just a simple sorting usage. Create a function that returns the elements of the input-array / list in a sorted manner. 

### Syntax:


```jsx 
sortme = function( names ){
  return names.sort()
}
```

# 7kyu Last Survivor 

### Description: 
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

```jsx 
function lastSurvivor(letters, coords) {
 
   letters = letters.split('');
         for (let i = 0; i < coords.length; i++) {
            letters.splice(coords[i], 1)
         }
         return letters.join('')
}
```
#7 Kyu Harvest Festival 

### Description: 
You have cultivated a plant, and after months of hard work, the time has come to reap the flowers of your hard work. When it was growing, you added water and fertilizer, and kept a constant temperature. It's time check how much your plant has grown.

```jsx 
function plant(seed, water, fert, temp){

  return temp >= 20 && temp <= 30 ? ('-'.repeat(water) + seed.repeat(fert)).repeat(water) : ('-'.repeat(water*water)+seed)
  
  }
```
### 7 KYU Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe 

### Description 
You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

```jsx 
function countDevelopers(list) {
 return list.filter(a => a.continent === 'Europe' && a.language ==='JavaScript').length
}
```
### 7 kyu Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins

### Description 
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript  developers who are GitHub admins:

```jsx 
function findAdmin(list, lang) {
  return list.filter(a => a.language===lang && a.githubAdmin === 'yes')
  // thank you for checking out the Coding Meetup kata :)
}
```

### 7 kyu Coding Meetup #11 - Higher-Order Functions Series - Find the average age

### Description
write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer.

```jsx
function getAverageAge(list) {
  
  return Math.round(list.reduce((acc,current)=> acc += current.age,0) / list.length)
  // thank you for checking out the Coding Meetup kata :)
  }

```

### 7 kyu Coding Meetup #2 - Higher-Order Functions Series - Greet developers 

### Description 
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >? 

```jsx 
function greetDevelopers(list) { 

  list.forEach(a=> a.greeting=`Hi ${a.firstName}, what do you like the most about ${a.language}?`)
  return list 
}
``` 

### 7 kyu Coding Meetup #14 - Higher-Order Functions Series - Order the food

### Description 
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

```jsx 
function orderFood(list) {
   const obj={}
  list.map(v=>obj[v.meal]=obj[v.meal]?obj[v.meal]+1:1)
  return obj

}
```

### 8 kyu Sum Mixed Array 

### Description 
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers...

```jsx 
function sumMix(x){
return Number(x.reduce((a,b) => Number(a) + Number(b)))
}


```

### 8 Fake binary

### Description 
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.



```jsx 
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}


```  

### 8 KYU Get the mean of an array 

### Description 
Return the average of the given array rounded down to its nearest integer.

The array will never be empty.



```jsx 

function getAverage(marks){
return Math.floor(marks.reduce((c,a) => c+a ) / marks.length) 
}


```
### 8 KYU My head is in the wrong end 

### Description 
You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!



```jsx 
 function fixTheMeerkat(arr) {
return arr.reverse()
}
```

### 8 KYU UEFA EURO 2016 

### Description 
Finish the uefaEuro2016() function so it return string just like in the examples below:


```jsx 
function uefaEuro2016([t1,t2], [s1,s2]){
  if (s1==s2) return `At match ${t1} - ${t2}, teams played draw.`
  if (s1>s2) return `At match ${t1} - ${t2}, ${t1} won!`
  if (s1<s2) return `At match ${t1} - ${t2}, ${t2} won!`
} 
```


### 8 KYU Find Numbers which are divisible by given number 

### Description 
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.


```jsx 
function divisibleBy(numbers, divisor){
  
  return numbers.filter(nums => nums%divisor == 0)

}
```

### 8 KYU Merge two arrays into one 

### Description 
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

```jsx
function mergeArrays(arr1, arr2) {
return [...new Set(arr1.concat(arr2))].sort((a,b) => a - b )


}
```

### 8 KYU Convert a string to an array 

### Description 
Write a function to split a string and convert it into an array of words. For example:

```jsx
function stringToArray(string){
return string.split(' ')

}
```
### 8 KYU Count by X 

### Description 
Create a function with two arguments that will return an array of the first (n) multiples of (x).
Assume both the given number and the number of times to count will be positive numbers greater than 0.

```jsx 
function countBy(x, n) {
  var z = [];
  for(let i=1; i<=n*x; i++ )
  if(i%x==0) z.push(i)

  return z;
}
```

### 8 KYU Array plus Array 

### Description 
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

```jsx 
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a,c) => a + c)
}
```

### 7 KYU Sum of Array Singles 

### Description 
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

```jsx 
function repeats(arr){

  return arr.filter((v,i,arr)=>arr.indexOf(v)==arr.lastIndexOf(v)).reduce((a,b)=>a+b,0)

};
``` 
### 6 KYU String Transformer

### Description 
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input. 

```jsx 
function stringTransformer(str) {
return str.split` `.map(v=>v.replace(/./gi,v=>{
  if (v===v.toLowerCase()) return v.toUpperCase()
  if (v===v.toUpperCase()) return v.toLowerCase()
})).reverse().join` `
} 
```
### 8KYU Well of Ideas - Easy Version 

### Description 
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'. 

```jsx 
function well(x){
const count = x.reduce((s,v) => s + (v==='good'), 0); 
return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!'
} 
```

### 8 KYU Removing Elements 

  
### Description:
Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.
Example:
myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
None of the arrays will be empty, so you don't have to worry about that!

```jsx
const removeEveryOther = arr => arr.filter((_, i) => i % 2 === 0)
```
### 8 KYU Speed 

### Description:
SpeedCode #2 - Array Madness
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
E.g.
arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
Get your timer out. Are you ready? Ready, get set, GO!!!

```jsx
function arrayMadness(a, b) {
  return [...a].reduce((x, y) => x + y ** 2, 0)>[...b].reduce((x, y) => x + y ** 3, 0)
```

### 8 KYU Count The Monkeys 

### Description 
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

```jsx 
function monkeyCount(n) {
  let result = []
  for(i=1; i<=n; i++)
    result.push(i)
  return result 
}
``` 

### 8 KYU No loops 2 - you only need one 

### Description 
You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

Looking for more, loop-restrained fun? Check out the other kata in the series:

```jsx 
function check(a,x){
  return a.includes(x)
};
```

### 8 KYU A needle in the haystack 

### Description 
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

```jsx 
function findNeedle(haystack) {
return "found the needle at position " + haystack.indexOf("needle");
} 
```

### 8 KYU Counting Sheeps 

### Description 
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

```jsx 
function countSheeps(arrayOfSheep) {
return arrayOfSheep.filter(Boolean).length
}
```

###8 KYU add length 

### Description 
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

```jsx 
function addLength(str) {
return str.split(' ').map(x => `${x} ${x.length}`)
}
``` 

### 8 KYU A wolf in a sheep's clothing 

### Description 
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

```jsx 
function warnTheSheep(queue) {
const index=queue.indexOf('wolf') 
return index===queue.length-1?'Pls go away and stop eating my sheep' : `Oi! Sheep number ${queue.length-1-index}! You are about to be eaten by a wolf!`
}
```
### 8 KYU Grasshopper - Terminal Game Turn Function 

### Description 
You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

```jsx 
function doTurn () {
rollDice(), 
move(),
combat(),
getCoins(),
buyHealth(),
printStatus()
  
}
``` 

### 8 KYU Enumerable Magic #1 - True for All? 

### Description 
Create a method all which takes an array and a predicate (function pointer), and returns true if the predicate returns true for every element in the array. Otherwise, it should return false. If the array is empty, it should return true, since technically nothing failed the test.

```jsx 
function all( arr, fun ){
  return arr.every(fun)
}
``` 

### 8 KYU noobCode 01: SUPERSIZE ME.... or rather, this integer! 

### Description 
Write a function that rearranges an integer into its largest possible value.

```jsx
function superSize(num){
  return Number(String(num).split('').sort((a,b)=>b-a).join(''))
} 
```

### 8 KYU #To square(root) or not to square(root)

### Description 
Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array like this:

```jsx 
 const isSquareRootInteger = num => Number.isInteger(Math.sqrt(num)) 
  const squareOrSquareRoot = array => array.map(num => (isSquareRootInteger(num) ? Math.sqrt(num) : num ** 2))
``` 

### 8 KYU Printing Array elements with Comma delimiters

### Description 
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

```jsx 
function printArray(array){
return array.join( )
}
``` 

### 8 KYU Remove First and Last Character Part Two 

### Description 
This is a spin off of my first Kata, you are given a list of characters as a comma separated string. Write a function to return a string containing all except the first and last characters, separated by spaces. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return null value.
Arrays are joined by adding a single space between each consecutive array element. 

```jsx 
function array(arr){
return arr.split(',').slice(1,-1).join(' ')|| null 
}
```

### 8 KYU Arguments to Binary addition

### Description 
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded. 

```jsx 
function arr2bin(arr){
    return arr.reduce((total, value) => (typeof value === 'number' ? total + value : total), 0)
    .toString(2)
} 
```

### 8 KYU Training JS #4: Basic data types--Array 

### Description 
In javascript, Array is one of basic data types. Define an empty array can use var arr=new Array() or var arr=[]
Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.
Each element in the array has an index, use arr[index] to get the value of element.
index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].

```jsx 
function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr.shift() 
}
function getLast(arr){
  //return the last element of arr
  return arr.pop()
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(4)
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}
```
### 8kyu Training JS #29: methods of arrayObject---concat() and join()

### Description 
This lesson we learn two methods of array: concat() and join(). We have seen concat() in the stringObject method, but the method of the arrayObject is different from the stringObject method, so we need to learn again. When studying the stringObject method split(), we have simply learned the join() method. This time we will review and explain it in detail. 

```jsx 
function bigToSmall(arr){
  return [].concat(...arr).sort((a,b)=>b-a).join('>')
  
} 
```
### 8kyu Push a hash/an object into array

### Description 
You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible! 

```jsx 
let items = []
items.push ({a: "b", c: "d"})
````
### 8KYU Duck Duck Goose

### Description 
Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

```jsx 
function duckDuckGoose(players, goose) {
  return players[(goose-1)%players.length].name
}
```
### 7KYU Even Numbers in Array 

### Description 
Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

```jsx 
function evenNumbers(array, number) {
  return array.filter(x=> x % 2 == 0).slice(-number)
}
```
### 7KYU Alan Partridge III - London

### Description 
Your job is to check that the provided list of stations contains all of the stops Alan mentions. There will be other stations in the array. Example:

```jsx 
const stations = ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway']; 
  
  return stations.every(v=>x.includes(v)) ? 'Smell my cheese you mother!' : 'No, seriously, run. You will miss it.'
}
```
### 7KYU Drone Fly-By 

### Description 
You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

Return the resulting lamps string. See example tests for more clarity. 

```jsx 
function flyBy(lamps, drone){
if(drone.length>lamps.length) return 'o'.repeat(lamps.length)
  
  return 'o'.repeat(drone.length) + 'x'.repeat(lamps.length-drone.length)
}
```
