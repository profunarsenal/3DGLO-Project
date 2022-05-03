import Swiper, { Autoplay } from 'swiper';

export const swiper = () => {
  const swiper = new Swiper('.swiper', {
    modules: [Autoplay],
    autoplay: {
      delay: 1000
    },
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      640: {
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
}