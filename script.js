const page = document.querySelector("body");

page.addEventListener("click", function () {
  let val = Math.round(Math.random());
  val === 1
    ? (page.style.backgroundColor = "black")
    : (page.style.backgroundColor = "red");
});
