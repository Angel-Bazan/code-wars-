

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

