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
    for (let i = 1; i <= n; i++) {
        let space = ' '.repeat(n - i);
        let star = '*'.repeat(i);
        console.log(space + star);
    }
}

// Example usage:
printTriangle(5);