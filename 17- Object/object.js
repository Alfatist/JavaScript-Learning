let friend = {
  name: "josef",
  sex: "M",
  weight: 85.4,
  gainWeight(w = 0) {
    console.log(`Gained weight.`);
    this.weight += w;
  },
};

friend.gainWeight(9);
console.log(`${friend.name} have ${friend.weight}kg`);
