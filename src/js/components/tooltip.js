const infoBtn = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

for (const btn of infoBtn) {
  btn.addEventListener("click", showHint);
}

function showHint(e) {
  e.stopPropagation();
  this.parentNode.querySelector(".info-hint").classList.toggle("none");
}

document.addEventListener("click", closeHint);

function closeHint() {
  for (const hint of infoHints) {
    hint.classList.add("none");
  }
}

infoHints.forEach((e) =>
  e.addEventListener("click", (el) => {
    el.stopPropagation();
  })
);
