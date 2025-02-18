const submit = document.getElementById("submit");
const formContainer = document.querySelector(".form-container");
const resultContainer = document.querySelector(".result-container");
const lablesLi = document.querySelectorAll(".labels ul li");
const output = document.getElementById("output");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const active = document.querySelector(".active");
  if (active == undefined) {
    output.textContent = 0;
  } else {
    output.textContent = parseInt(active.textContent);
  }
  formContainer.style.display = "none";
  resultContainer.style.display = "flex";
});

lablesLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    lablesLi.forEach((li) => {
      li.classList.remove("active");
    });
    const target = e.target;
    target.classList.add("active");
  });
});
