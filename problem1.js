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
    for (let i = 1; i <= n; i++) {
        // Calculate the number of spaces and asterisks for the current row
        let spaces = ' '.repeat(n - i);
        let asterisks = '*'.repeat(i);

        // Concatenate spaces and asterisks, then print the result
        console.log(spaces + asterisks);
    }

}

// Example usage:
printTriangle(5);
