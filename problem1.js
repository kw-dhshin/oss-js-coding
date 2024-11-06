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

    let i=0;
    for(i=0;i<n;i++){
        for(k=0;k<n;k++){
            if(k>=(n-i)){
                console.log('*');
            }
            else{
                console.log(' ');
            }
            
            
        }
        console.log('/n');
    }

}

// Example usage:
printTriangle(5);
