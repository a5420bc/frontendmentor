const navlist = document.querySelector(".nav-list");
const navBtn = document.querySelector(".nav__btn");
const navBtnImg = document.querySelector(".nav__btn img");
const navLis = document.querySelectorAll(".nav-list li");
const nav = document.querySelector(".nav");

navBtn.addEventListener("click", () => {
  if (navBtn.classList.contains("nav__btn-active")) {
    navBtn.classList.remove("nav__btn-active");
    navlist.classList.add("nav-list-hidden");
    navBtnImg.src = "./images/icon-hamburger.svg";
  } else {
    navBtn.classList.add("nav__btn-active");
    navlist.classList.remove("nav-list-hidden");
    navBtnImg.src = "./images/icon-close.svg";
  }
  navLis.forEach((li, index) => {
    if (li.style.animation) {
      li.style.animation = "";
    } else {
      li.style.animation = `fadeInTop 0.7s ${index / 8 + 0.3}s backwards`;
    }
  });
});

window.onscroll = function () {
  if (window.innerWidth <= 750) {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      nav.classList.add("nav-scroll");
    } else {
      nav.classList.remove("nav-scroll");
    }
  }
};
