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
        let spaces = ' '.repeat(n - i);  // 왼쪽 공백 추가
        let stars = '*'.repeat(i);       // 별 추가
        console.log(spaces + stars);     // 한 줄에 출력
    }
}

// Example usage:
printTriangle(5);
