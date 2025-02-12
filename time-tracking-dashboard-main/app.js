const buttons = document.querySelectorAll(".button");
const timeCurrent = document.querySelectorAll(".time_current");
const timeLast = document.querySelectorAll(".time_last");
async function fetchData() {
  const response = await fetch("http://localhost:5500/data.json");
  const data = await response.json();
  console.log(data);
  return data;
}

async function updateIdx(idx) {
  let timePeriod;
  let timePlain;
  const data = await fetchData();
  switch (idx) {
    case 0:
      timePeriod = "daily";
      timePlain = "Last Day - ";
      break;
    case 1:
      timePeriod = "weekly";
      timePlain = "Last week - ";
      break;
    default:
      timePeriod = "monthly";
      timePlain = "Last Monthly - ";
      break;
  }
  buttons[idx].classList.add('active');
  for (let i = 0; i < data.length; i++) {
    timeCurrent[i].textContent = data[i].timeframes[timePeriod].current + "hrs";
    timeLast[i].textContent = timePlain + data[i].timeframes[timePeriod].previous + "hrs";
  }
}

buttons.forEach(function (btn, idx) {
  btn.addEventListener("click", function (e) {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    console.log(idx);
    updateIdx(idx);
    e.preventDefault();
  });
});

updateIdx(0);
