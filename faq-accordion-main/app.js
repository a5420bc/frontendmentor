const qs = document.querySelectorAll(".q-s");
const qsImg = document.querySelectorAll(".q-s img");

qsImg.forEach((img) => {
  img.addEventListener("click", (e) => {
    const ele = e.target;
    if (ele.classList.contains("expand")) {
      ele.src = "./assets/images/icon-plus.svg";
      ele.classList.remove("expand");
      ele.parentElement.nextElementSibling.classList.remove("show");
      ele.previousElementSibling.classList.remove("expand");
    } else {
      ele.classList.add("expand");
      ele.parentElement.nextElementSibling.classList.add("show");
      ele.src = "./assets/images/icon-minus.svg";
      ele.previousElementSibling.classList.add("expand");
    }
  });
});
