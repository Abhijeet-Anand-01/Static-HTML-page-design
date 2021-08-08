$('.carousel').carousel({
    interval: 3000
});


const menuBtn = document.querySelector(".menu-btn");
const listNav = document.querySelector(".list");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if(!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
        listNav.classList.add("open");
    }
    else {
        menuBtn.classList.remove("open");
        menuOpen = false;
        listNav.classList.remove("open");
    }
});


// document.getElementById('hamburger').addEventListener('click', () => {
//         if(!open) {ul.classList.remove("close");
//         ul.classList.add("open");}
// });