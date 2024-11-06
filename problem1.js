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
    for(let i = 1; i <= n ; i++){
        let space = ' '.repeat(n-i); // 공백
        let stars = '*'.repeat(i);
        console.log(space+stars);
    }

}

// Example usage:
printTriangle(5);