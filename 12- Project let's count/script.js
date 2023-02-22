function count() {
  let start = Number.parseInt(document.getElementById("start").value);
  let end = Number.parseInt(document.getElementById("end").value);
  let steps = Number.parseInt(document.querySelector("input#steps").value);
  let count = document.querySelector("p#count");
  let text = "It's impossible to count.TXT_REMOVE";
  if (start < end && steps > 0) {
    text = start + " &#128073 ";
    for (let i = start + steps; i <= end; i += steps) {
      text += `${i} &#128073	 `;
    }
  }
  if (start > end && steps > 0) {
    text = start + " &#128073 ";
    for (let i = start - steps; i >= end; i -= steps) {
      text += `${i} &#128073 `;
    }
  }
  count.innerHTML = String(text.slice(0, text.length - 10));
}
