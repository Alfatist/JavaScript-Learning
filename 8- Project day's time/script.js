function load() {
  let body = window.document.body;
  let msg = window.document.getElementById("msg");
  let img = window.document.querySelector("img#img");
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let section = window.document.querySelector("section#section");

  if (minute === 0) {
    msg.innerHTML = `now it's ${hour}:${minute}0 o'clock.`;
  } else if (minute < 10) {
    msg.innerHTML = `now it's ${hour}:0${minute}.`;
  } else {
    msg.innerHTML = `now it's ${hour}:${minute}.`;
  }

  if (hour >= 0 && hour < 6) {
    img.src = "night.jpg";
    body.style.backgroundColor = "#231F20";
    section.style.backgroundColor = "#221E1F";
  } else if (hour >= 12 && hour < 18) {
    img.src = "afternoon.jpg";
    body.style.backgroundColor = "#BE9E2C";
    section.style.backgroundColor = "#FEF9DC";
  } else if (hour >= 18 && hour <= 24) {
    img.src = "evening.jpg";
    body.style.backgroundColor = "#224770";
    section.style.backgroundColor = "#c9d6db";
  } else if (!(hour < 12)) {
    img.src = "dark hour.jpg";
    body.style.backgroundColor = "#000000";
    section.style.backgroundColor = "#000000";
    msg.style.color = "white";
  }
  setTimeout(function () {
    document.getElementById("loading").style.display = "none";
  }, 2000);
}
