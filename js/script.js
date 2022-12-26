var swiper = new Swiper(".plats-swiper", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 10,
  loop:true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
