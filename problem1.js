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
    for (let i = 0; i < n + 1; i++) {
        let line = "";
        for (let j = 0; j < n + 1 - i; j++) {
            //console.log(" ");
            line = line + " ";
        }
        for (let j = 0; j < i; j++) {
            //console.log("*");
            line = line + "*";

        }
        console.log(line);

    }
    // TODO: Implement this function

}

// Example usage:
printTriangle(5);
