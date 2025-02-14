const bill = document.getElementById("bill");
const tips = document.getElementById("tips");
const people = document.getElementById("people");
const errorBill = document.querySelector(".error-bill");
const errorPeople = document.querySelector(".error-people");
const tipBtns = document.querySelectorAll(".select-tips span");
const amount = document.getElementById("amount");
const total = document.getElementById("total");
const buttonReset = document.querySelector(".button");

function calculate() {
  const billM = parseInt(bill.value);
  const tipActive = document.querySelector(".select-tips .active");
  let tipActiveM;
  if (tipActive) {
    tipActiveM = parseFloat(parseInt(tipActive.textContent||tipActive.value)) / 100;
  } else {
    tipActiveM = 0;
  }
  const peopleM = parseInt(people.value);
  if (
    Number.isNaN(billM) ||
    Number.isNaN(peopleM) ||
    billM === 0 ||
    peopleM === 0
  ) {
    amount.textContent = (0.0).toFixed(2);
    total.textContent = (0.0).toFixed(2);
    return;
  }
  const totalPerson = ((tipActiveM * billM + billM) / peopleM).toFixed(2);
  const tipPerson = ((tipActiveM * billM) / peopleM).toFixed(2);
  console.log(totalPerson);
  console.log(tipPerson);
  amount.textContent = tipPerson;
  total.textContent = totalPerson;
}

tipBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    tipBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    tips.classList.remove("active");
    tips.value = "";
    btn.classList.add("active");
    calculate();
  });
});

tips.addEventListener('keyup', ()=> {
    tipBtns.forEach((btn) => {
        btn.classList.remove("active");
    });
    tips.classList.add("active");
    calculate();
});

bill.addEventListener("keyup", function () {
  const billM = parseInt(this.value);
  if (Number.isNaN(billM)|| billM === 0) {
    errorBill.classList.add("active");
    this.classList.add("active");
    errorBill.textContent = "Can't not be zero";
  } else {
    this.classList.remove("active");
    errorBill.classList.remove("active");
    errorBill.textContent = "";
  }
  calculate();
});

people.addEventListener("keyup", function () {
  const peopleM = parseInt(this.value);
  if (Number.isNaN(peopleM) || peopleM === 0) {
    errorPeople.classList.add("active");
    this.classList.add("active");
    errorPeople.textContent = "Can't not be zero";
  } else {
    errorPeople.classList.remove("active");
    this.classList.remove("active");
    errorPeople.textContent = "";
  }
  calculate();
});


buttonReset.addEventListener("click", function () {
    window.location.reload();
});