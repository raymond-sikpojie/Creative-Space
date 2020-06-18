const icon = document.querySelector(".icon");
const navbar = document.querySelector(".topnav");

const changeIcons = () => {
  if (navbar.classList.contains("responsive")) {
    document.querySelector(".bars").style = "display: none";
    document.querySelector(".times").style = "display: block";
  } else {
    document.querySelector(".bars").style = "display: block";
    document.querySelector(".times").style = "display: none";
  }
};

// On mobile view, activate toggler

// icon.addEventListener("click", (e) => {
//   if (navbar.className === "topnav") {
//     navbar.className += " responsive";
//   } else {
//     navbar.className = "topnav";
//   }
//   changeIcons();
// });

//  When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     navbar.style.top = "0";
//   } else {
//     navbar.style.top = "-8vh";
//   }
//   prevScrollpos = currentScrollPos;
// };

// Initialize Animate on Scroll
AOS.init();
