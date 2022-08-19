var mySwiper = new Swiper('.swiper-container', {
    loop: false,
    autoplay: {
      delay: 6000,
      desableOnInteaction: false,
      speed: 1000,

    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
