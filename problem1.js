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
    for (let i = 5; i > 0; i--){
        for (let j = 0; j < i - 1; j++){
            process.stdout.write(" ");
        }
        for (let k = 5; k >= i; k--){
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }

}

// Example usage:
printTriangle(5);