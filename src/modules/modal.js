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
      modal.style.cssText = `
      display: block;
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 9;
      background-color: rgba(0, 0, 0, .5);
      display: block;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: 0.5s ease;
      `;

      modalContent.style.cssText = `
      position: fixed;
      text-align: center;
      width: 40rem;
      left: 38%;
      top: 10%;
      -webkit-transform: translateX(-50px);
      transform: translateX(-50px);
      padding: 2rem 6rem;
      background-color: #24241f;
      transition: 0.5s ease;
      transform: scale(0);
      `;
    }

  }

  const openModal = () => {

    if (width < 768) {
      modal.style.display = 'block';
    } else {
      modal.style.cssText = `
      display: block;
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 9;
      background-color: rgba(0, 0, 0, .5);
      display: block;
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      transition: 0.5s ease;
      `;

      modalContent.style.cssText = `
      position: fixed;
      text-align: center;
      width: 40rem;
      left: 38%;
      top: 10%;
      -webkit-transform: translateX(-50px);
      transform: translateX(-50px);
      padding: 2rem 6rem;
      background-color: #24241f;
      transition: 0.5s ease;
      transform: scale(1);
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