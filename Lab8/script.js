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



// Отримуємо елементи відео і кнопки
const video = document.getElementById('backgroundVideo');
const toggleBtn = document.getElementById('toggleBtn');

// При натисканні на кнопку зупиняємо або відновлюємо відео
toggleBtn.addEventListener('click', function() {
    if (video.paused) {
        video.play(); // Відновлюємо відео
        toggleBtn.classList.remove('pause');
        toggleBtn.classList.add('play');
    } else {
        video.pause(); // Зупиняємо відео
        toggleBtn.classList.remove('play');
        toggleBtn.classList.add('pause');
    }
});

// Встановлюємо кнопку у стан 'play' на початку
toggleBtn.classList.add('play');



const burgerBtn = document.getElementById('burger-btn');
const headerMenu = document.getElementById('header-menu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    headerMenu.classList.toggle('active');
});









const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
});
