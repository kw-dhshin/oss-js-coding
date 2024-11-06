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

function printTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
      let spaces = ' '.repeat(rows - i);
      let stars = '*'.repeat(i);
      console.log(spaces + stars);
    }
  }
  
  printTriangle(5);
  
