const swiper = new Swiper('.featured-slider', {
  speed: 400,
  spaceBetween: 100,
  loop: true,
  pagination: {
    el: ".featured-pagination",
    clickable: true
  }
});