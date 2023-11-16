const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
const navItemEls = document.querySelectorAll('.nav__item');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('nav--open');
  hamburgerEl.classList.toggle('hamburger--open');
});

navItemEls.forEach(navItemEl => {
  navItemEl.addEventListener('click', () => {
    navEl.classList.remove('nav--open');
    hamburgerEl.classList.remove('hamburger--open');
  });
});

const header = document.querySelector('.header');
const topBar = document.querySelector('.top-bar');
const bottomBar = document.querySelector('.bottom-bar');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    topBar.classList.add('scrolled');
    bottomBar.classList.add('scrolled');
  } else {
    topBar.classList.remove('scrolled');
    bottomBar.classList.remove('scrolled');
  }
});


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});