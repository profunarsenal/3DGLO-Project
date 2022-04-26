const slider = () => {
  const sliderBlock = document.querySelector('.portfolio-content');
  const slides = document.querySelectorAll('.portfolio-item');
  const dotsBlock = document.querySelector('.portfolio-dots');
  const timerInterval = 2000;

  let currentSlide = 0;
  let dots = [];
  let interval;

  const createDots = (array) => {
    array.forEach(elem => {
      const li = document.createElement('li');
      li.classList.add('dot');

      dots.push(li);
      dots[0].classList.add('dot-active');

      dotsBlock.append(li);
    })
  }

  const prevSlide = (elems, index, activeClass) => {
    elems[index].classList.remove(activeClass);
  }

  const nextSlide = (elems, index, activeClass) => {
    elems[index].classList.add(activeClass);
  }

  const autoPlay = () => {
    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');

    currentSlide++

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  }

  const startSlider = (timer = 1500) => {
    if (dots.length === 0) {
      createDots(slides)
    }

    interval = setInterval(autoPlay, timer);
  }

  const stopSlider = () => {
    clearInterval(interval);
  }

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches('.dot, .portfolio-btn')) {
      return
    }

    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');

    if (e.target.matches('#arrow-left')) {
      currentSlide--
    } else if (e.target.matches('#arrow-right')) {
      currentSlide++
    } else if (e.target.matches('.dot')) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index
        }
      })
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');

  })

  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      stopSlider()
    }
  }, true)

  sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      startSlider(timerInterval)
    }
  }, true)

  startSlider(timerInterval);
}

export default slider