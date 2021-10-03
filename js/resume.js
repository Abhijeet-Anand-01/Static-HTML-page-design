const menuBtn = document.querySelector(".menu-btn");
const listNav = document.querySelector(".list");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
        listNav.classList.add("open");
    }
    else {
        closeNav();
    }
});

// const list = document.querySelector(".navname");
// list.addEventListener("click", () => {
//     if (menuOpen) {
//         closeNav();
//     }
// });

function closeNav() {
    menuBtn.classList.remove("open");
    menuOpen = false;
    listNav.classList.remove("open");
}

// document.querySelector(".navname").addEventListener("click", alert("Hello World!"));

$(document).ready(function () {
    console.log("called")
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#scroll").fadeIn();
      } else {
        $("#scroll").fadeOut();
      }
    });
    $("#scroll").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  });