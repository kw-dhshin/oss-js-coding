function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let space = '';
        for (let j = 1; j <= n - i; j++) {
            space += ' ';
        }
        for (let k = 1; k <= i; k++) {
            space += '*';
        }
        console.log(space);
    }
}
printTriangle(5);
