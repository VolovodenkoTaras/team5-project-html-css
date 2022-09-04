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
    delay: 6000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    loop: true


  },
  speed: 1000,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },



});