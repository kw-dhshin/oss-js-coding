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
        // 공백과 별을 조합하여 출력
        const spaces = ' '.repeat(n - i);
        const stars = '*'.repeat(i);
        console.log(spaces + stars);
    }
}

// Example usage:
printTriangle(5);