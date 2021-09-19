Test 1 (2/20) 

Apply CSS styles (red color and black background) to the third paragraph of the following HTML template: 

```
<div class=”container”> 
    <p>First</p> 
    <p>Second</p> 
    <p>Third</p> 
</div> 
```

Test 2 (3/20) 

Write a program that outputs sequentially the integers from 1 to 99 but on some conditions prints a string instead: 

* when the integer is a multiple of 3 print “Open” instead of the number, 
* when it is a multiple of 7 print “Source” instead of the number, 
* when it is a multiple of both 3 and 7 print “OpenSource” instead of the number. 

Test 3 (2/20) 

Find all children of the container HTML element in the following template using native JavaScript functionality. 

```
<div class=”container”> 
    <div>A</div> 
    <div>B</div> 
    <div>C</div> 
</div>
```

Test 4 (3/20) 

Write a function that takes a list of strings and returns the sum of the list items that represent an integer (skipping the other items). 
Example: 
Input: [‘1’, ‘a’, ‘25’, ‘13.1’]. 
Output: 26. 

Test 5 (5/20) 

Write a function that gets JSON from the following link 
(https://jsonplaceholder.typicode.com/posts) and returns an object with id = 5. 

Test 6 (4/20) 

Write a regular expression to match strings containing both "Softeq" and "#rules" in any order. 

Test 7 (5/20) 

Write a function that, when called, returns an array for which each element is a letter of the alphabet, from "A" to "Z" (exactly once, in order and upper case). Your code cannot contain the character ' (quote), " (double quote) or ` (backquote). 

Test 8* (6/20) 

Solve the game "Guess a number", find a secret integer between 1 and 1000000 in less than 50 guesses. Write a function that solves the game and returns the solution by using the function verify() which is defined with the following specification: 
function verify(guess: integer) -> integer 
Returns: 

* 0 if the guess is the solution, your program won, 
* -1 if the solution is smaller than the guessing parameter, 
* 1 if the solution is bigger than the guessing parameter. 

Warning: You are not allowed to call verify() more than 50 times or you lose.
