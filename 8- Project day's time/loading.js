function showLoading() {
  const div = document.createElement("div");
  div.classList.add("loading");

  const label = document.createElement("label");
  label.innerText = "Loading...";

  div.appendChild(label);
  document.body.appendChild(div);
}

function hideLoading() {
  const loadDelete = window.document.querySelector("div.loading");
  loadDelete.remove();
}
