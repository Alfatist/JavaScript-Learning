function table() {
  let num = document.getElementById("number");
  let tab = document.getElementById("seltab");
  if (num.value.length == 0) {
    console.log("Type a number.");
  } else {
    let n = Number(num.value);
    let c = 1;
    tab.replaceChildren("option", "");
    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      c++;
      item.value = `tab${c}`;
      tab.appendChild(item);
    }
  }
}
