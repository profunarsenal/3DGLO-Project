const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuLinks = menu.querySelectorAll('ul>li>a');

  const toggleMenu = () => {
    menu.classList.toggle('active-menu');
  }

  menuBtn.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

}

export default menu