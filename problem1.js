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
        // 공백 문자열을 계산하여 왼쪽에 배치합니다.
        let spaces = ' '.repeat(n - i);
        // 현재 줄에 해당하는 별을 추가합니다.
        let stars = '*'.repeat(i);
        // 공백과 별을 결합하여 출력합니다.
        console.log(spaces + stars);
    }
}

// Example usage:
printTriangle(5);