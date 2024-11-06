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
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            console.log(" ");
        }
        for(let j=n-i-1;j<n;j++){
            console.log("*");
        }
        console.log("\n");
}
}

// Example usage:
printTriangle(5);