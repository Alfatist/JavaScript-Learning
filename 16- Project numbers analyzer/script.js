let list = [];
let select = document.getElementById("list");
let div = document.getElementById("results");
function add() {
  let number = document.getElementById("number");
  if (number.value == "" && number.value !== "0") {
    window.alert("Hey, type a valid number!");
  } else if (list.includes(+number.value)) {
    window.alert("Hey, u can't repeat numbers!");
  } else {
    let item = document.createElement("option");
    list.push(+number.value);
    list.sort(function (a, b) {
      return a - b;
    });
    item.innerText = `The value ${number.value} has been added`;
    item.value = `item${number.value}`;
    select.appendChild(item);
    number.value = "";
    number.focus();
    div.replaceChildren("");
  }
}

function analyze() {
  if (list === []) {
    window.alert("Add some values!");
  } else {
    let sum = 0;
    div.replaceChildren("");
    for (let i = 0; i < 5; i++) {
      let item = document.createElement("p");
      switch (i) {
        case 0:
          item.innerText = `In total, we have ${list.length} numbers added`;
          div.appendChild(item);
          break;

        case 1:
          item.innerText = `The bigger number is ${list[list.length - 1]}`;
          div.appendChild(item);
          break;

        case 2:
          item.innerHTML = `The smallest number is ${list[0]}`;
          div.appendChild(item);
          break;

        case 3:
          for (let i = 0; i < list.length; i++) {
            sum += list[i];
          }
          item.innerText = `The sum of all values is ${sum}`;
          div.appendChild(item);
          break;

        case 4:
          item.innerText = `The average of the values is ${sum / list.length}`;
          div.appendChild(item);
          break;
      }
    }
  }
}
