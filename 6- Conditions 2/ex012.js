let now = new Date();
let hour = now.getHours();
console.log(`Now it's ${hour} o'clock`);
if (hour < 12) {
  console.log("Good morning!");
} else if (hour <= 18) {
  console.log("good afternoon!");
} else {
  console.log("Good evening!");
}
