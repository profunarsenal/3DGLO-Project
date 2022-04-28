import { animate } from "./helpers";

const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  const modalContent = modal.querySelector('.popup-content');
  let width = document.documentElement.clientWidth;

  const closeModal = () => {

    if (width < 768) {
      modal.style.cssText += `
      display: none;
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      transition: none;
      `;
      modalContent.style.cssText += `
      transition: none;
      transform: translate(-50px, -100%);
      `;
    } else {
      animate({
        duration: 300,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.cssText += `
          display: block;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: 0.3s;
          `;
          modalContent.style.cssText += `
          transform: translate(-50px,${-progress * 100}%);`;
        }
      });
    }
  }

  const openModal = () => {

    if (width < 768) {
      modal.style.cssText += `
      display: block;
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      transition: none;
      `;
      modalContent.style.cssText += `
      transition: none;
      transform: translate(-50px, 0);
      `;

    } else {
      animate({
        duration: 300,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.cssText += `
          display: block;
          opacity: ${progress};
          visibility: visible;
          pointer-events: all;
          `;
          modalContent.style.cssText += `
          transform: translate(-50px, 0%);
          transition: transform 0.3s`;
        }
      });
    }

  }

  buttons.forEach(btn => {
    btn.addEventListener('click', openModal);
  })


  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      closeModal();
    }
  })

  window.addEventListener('resize', () => {
    width = document.documentElement.clientWidth;
  })

}

export default modal