// Transparency when scrolling to header
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    const select = document.querySelector(".header-select");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
        select.classList.add("highlighted");
    } else {
        header.classList.remove("scrolled");
        select.classList.remove("highlighted");
    }
});


// Video stop and play
const video = document.getElementById('backgroundVideo');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        toggleBtn.classList.remove('pause');
        toggleBtn.classList.add('play');
    } else {
        video.pause();
        toggleBtn.classList.remove('play');
        toggleBtn.classList.add('pause');
    }
});

toggleBtn.classList.add('play');


// Button menu for head HEADER
const burgerBtn = document.getElementById('burger-btn');
const headerMenu = document.getElementById('header-menu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    headerMenu.classList.toggle('active');
});


// Button menu for Fashion Highlights
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
});