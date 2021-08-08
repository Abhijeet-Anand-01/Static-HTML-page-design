$('.carousel').carousel({
    interval: 3000
});


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

