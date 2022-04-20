const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  const btnClose = modal.querySelector('.popup-close');
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
      transform: translate(-50px, 0);
      `;
    } else {
      modal.style.cssText += `
      display: block;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: 0.5s ease;
      `;

      modalContent.style.cssText += `
      transition: 0.5s ease;
      transform: translate(-50px,-100%);
      `;
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
      modal.style.cssText += `
      display: block;
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      transition: 0.5s ease;
      `;

      modalContent.style.cssText += `
      transition: 0.5s ease;
      transform: translate(-50px, 0);
      `;
    }
  }

  closeModal();

  buttons.forEach(btn => {
    btn.addEventListener('click', openModal);
  })

  btnClose.addEventListener('click', closeModal)

  window.addEventListener('click', (e) => {
    if (e.target == modal) {
      closeModal()
    }
  })

  window.addEventListener('resize', () => {
    width = document.documentElement.clientWidth;
  })

}

export default modal