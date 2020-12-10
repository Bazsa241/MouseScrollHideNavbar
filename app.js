const burger = document.querySelector(".burger")
const nav = document.querySelector("nav");
const burgerCheck = document.getElementById("burger-check");

const navInit = () => {
  nav.style.width = "";
  nav.style.background = "none";
};

let check = true, scrollYAxis;


navInit();

burger.addEventListener("click", () => {
  check = check ? false : true;

  if (check) {
    navInit();
  } else {
    nav.style.width = "100%";
    nav.style.background = "#000";
  }
});

document.addEventListener("scroll", () => {
  if (scrollYAxis < window.scrollY) {
    burgerCheck.checked = true;
    check = true;
    navInit();
  }
  scrollYAxis = window.scrollY;
});
