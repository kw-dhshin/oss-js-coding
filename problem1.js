/*
(Problem)
Write a JavaScript function that, given a positive integer n,
prints a right-aligned triangle pattern of asterisks (*).
Each row of the triangle should contain an increasing number of asterisks,
starting with 1 asterisk at the top and ending with n asterisks at the bottom.

(Example)
For n = 5, the output should be:
    *
   **
  ***
 ****
*****
*/

function printTriangle(n) {
    
    // TODO: Implement this function
    for(let i=1; i<=n; i++) {
        let arr = '';
        for(let j=0; j<n-i; j++) arr+=' ';
        for(let j=0; j<i; j++) arr+='*';
        console.log(arr);
    }
}

// Example usage:
printTriangle(5);