// in brazil, must vote who is of age; >16 and >70 can vote optionally.
let age = 15;
console.log(`You have ${age}`);
if (age < 16) {
  console.log(`Can't vote`);
} else if (age < 18 || age > 69) {
  console.log(`Voluntary vote`);
} else {
  console.log(`Can vote`);
}
