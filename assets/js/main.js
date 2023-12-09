

/* =================== SHOW MENU =================== */
// toggle icon shows menu on click
let toggleIcon = document.getElementById("nav-toggle"), navMenu = document.getElementById("nav-menu");

if (toggleIcon && navMenu){
    toggleIcon.addEventListener("click", ()=>navMenu.classList.toggle("show__menu"));
}

// nav-links shows nav-manu on click
let navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', ()=>navMenu.classList.remove("show__menu"))
})




/* =================== ACTIVE NAVIGATION LINK =================== */
window.addEventListener('scroll', ()=>{
    // scroll distance
    let scrollDistance = window.scrollY;

    // for each section element, check if it is active or not
    document.querySelectorAll("section[id]").forEach((section)=>{
        let sectionTop = section.offsetTop - 50;                
        let sectionBottom = sectionTop + section.offsetHeight;
        let sectionId = section.getAttribute("id");

        if (scrollDistance >= sectionTop && scrollDistance <= sectionBottom){
            document.querySelector(`.nav__link[href*=${sectionId}]`).classList.add("active__link");
        } else {
            document.querySelector(`.nav__link[href*=${sectionId}]`).classList.remove("active__link");
        }
    })
})



/* =================== ADD SHADOW TO HEADER =================== */
let headerElement = document.querySelector("header");
window.addEventListener('scroll', ()=>{
    if (this.scrollY >= 200) headerElement.classList.add("header__shadow");
    else headerElement.classList.remove("header__shadow");
})



/* =================== SHOW BACK TO TOP BUTTON =================== */
let BackToTopButton = document.getElementById("back-to-top");
window.addEventListener('scroll', ()=>{
    if (this.scrollY >= 550) BackToTopButton.classList.add("show__back__to__top");
    else BackToTopButton.classList.remove("show__back__to__top");
})




/* =================== DARK/LIGHT THEME TOGGLE =================== */
let themeToggle = document.getElementById("theme-toggle"),
    bodyElement = document.querySelector("body");

themeToggle.addEventListener('click', ()=>{
    // check current theme of the page
    let dark = bodyElement.classList.contains("dark__theme__tag");

    // if page is on dark theme, change to light
    if (dark) {
        bodyElement.classList.remove("dark__theme__tag");
        themeToggle.classList.remove("bx-toggle-right");
    } 

    // if page is on light theme, change to dark
    else {
        bodyElement.classList.add("dark__theme__tag");
        themeToggle.classList.add("bx-toggle-right");
    }

})






/* =================== SCROLL REVEAL ANIMATION =================== */
const sr = ScrollReveal({
    distance: "30px",
    duration: 1800,
    reset: true
})

sr.reveal(`.home__data, .home__img,
           .decoration__data,
           .accessory__data,
           .footer__data`, {
    origin: "top",
    interval: 200
})

sr.reveal(`.share__img`, {
    origin: "left"
})

sr.reveal(`.share__data`, {
    origin: "right"
})

