

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
