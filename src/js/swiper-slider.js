var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  grabCursor: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {

    sensitivity: 1,
  },

  freeMode: true,

  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    pauseOnMouseEnter: true


  },
  speed: 2000,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },



});