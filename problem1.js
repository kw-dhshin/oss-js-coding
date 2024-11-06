function printTriangle(n) {

for(let i = 1; i <= 5; i++){
	let stars = "";
	for(let j = 1; j <= i; j++){ 
		stars = stars + " ";
	}
	for(let j=5;j>=i;j--){
		stars = stars +"*";
	}
	console.log(stars);
}
}

// Example usage:
printTriangle(5);