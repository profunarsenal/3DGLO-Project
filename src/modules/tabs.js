const tabs = () => {
  const tabsContent = document.querySelectorAll('.service-tab');
  const tabsHeader = document.querySelector('.service-header');
  const tabsButtons = document.querySelectorAll('.service-header-tab');

  tabsHeader.addEventListener('click', (e) => {
    if (e.target.closest('.service-header-tab')) {
      const tabBtn = e.target.closest('.service-header-tab');

      tabsButtons.forEach((btn, index) => {
        if (btn === tabBtn) {
          btn.classList.add('active');
          tabsContent[index].classList.remove('d-none');
        } else {
          btn.classList.remove('active');
          tabsContent[index].classList.add('d-none');
        }
      })
    }
  })
}

export default tabs