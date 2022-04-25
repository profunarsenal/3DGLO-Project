const menu = () => {
  const menu = document.querySelector('menu');

  const toggleMenu = (e) => {
    if (e.target.closest('.menu')) {
      menu.classList.add('active-menu')
    } else if (e.target.classList.contains('close-btn') || e.target.matches('ul>li>a') || !e.target.closest('menu')) {
      menu.classList.remove('active-menu')
    }
  }

  document.addEventListener('click', toggleMenu)

}

export default menu