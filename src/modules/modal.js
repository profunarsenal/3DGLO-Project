const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  const btnClose = modal.querySelector('.popup-close');
  const modalContent = modal.querySelector('.popup-content');
  const width = document.documentElement.clientWidth;

  const closeModal = () => {

    if (width < 768) {
      modal.style.display = 'none';
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
      modal.style.display = 'block';
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

}

export default modal