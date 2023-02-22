let num = [5, 8, 2, 9, 3];

console.log(num);
console.log("Our array have " + num.length + " indexes");
console.log(`The first array's value is ${num[0]}`);
num.push(1);
num.sort();
console.log(num);

let pos = num.indexOf(8);
console.log(`The value 8 is in the position ${pos}`);
