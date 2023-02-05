const header = document.querySelector("header");
const toggle = document.querySelector("#toggle_menu");
const toggleClose = document.querySelector("#toggle_close");
const navItems = document.querySelectorAll(".nav_item");
const darkBg = document.querySelector(".dark_bg");

const closeMenu = () => {
header.classList.remove("active");
}

toggle.addEventListener('click', () => {
header.classList.add("active");
})

toggleClose.addEventListener('click', () => closeMenu());
darkBg.addEventListener('click', () => closeMenu());
navItems.forEach(menu => {
menu.addEventListener('click', () => closeMenu())
});

window.onresize = () => {
if (window.innerWidth > 1000) {
    header.classList.remove("active");
}
}