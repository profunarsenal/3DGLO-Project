const scroll = () => {
  const menuLinks = document.querySelectorAll('menu>ul>li>a');
  const btn = document.querySelector('main>a');

  const links = [...menuLinks, btn];

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const id = link.getAttribute('href');
      const section = document.querySelector(id);

      if (section) {
        section.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
      }
    })
  })
}

export default scroll