const page = document.querySelector("body");

page.addEventListener("click", function () {
  let val = Math.floor(Math.random() * 2);
  val === 1
    ? (page.style.backgroundColor = "black")
    : (page.style.backgroundColor = "red");
});
