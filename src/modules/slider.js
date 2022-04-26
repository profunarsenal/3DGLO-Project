const slider = (sliderClass, slidesClass) => {
  const sliderBlock = document.querySelector(sliderClass);
  const slides = document.querySelectorAll(slidesClass);
  const timerInterval = 2000;

  let currentSlide = 0;
  let dots = [];
  let interval;

  const addStyle = () => {
    const style = document.createElement('style');
    style.textContent = `
    .slide-active {
      opacity: 1;
      -webkit-transition: opacity .5s;
      transition: opacity .5s
    }
    `;

    document.head.append(style);

    slides[0].classList.add('slide-active');
  }

  const createDots = () => {
    const dotsBlock = document.createElement('ul');
    dotsBlock.classList.add('portfolio-dots');

    slides.forEach(slide => {
      const li = document.createElement('li');
      li.classList.add('dot');

      dots.push(li);
      dots[0].classList.add('dot-active');

      dotsBlock.append(li);
    })

    sliderBlock.append(dotsBlock);
  }

  const prevSlide = (elems, index, activeClass) => {
    elems[index].classList.remove(activeClass);
  }

  const nextSlide = (elems, index, activeClass) => {
    elems[index].classList.add(activeClass);
  }

  const autoPlay = () => {
    prevSlide(slides, currentSlide, 'slide-active');
    prevSlide(dots, currentSlide, 'dot-active');

    currentSlide++

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, 'slide-active');
    nextSlide(dots, currentSlide, 'dot-active');
  }

  const startSlider = (timer = 1500) => {
    interval = setInterval(autoPlay, timer);
  }

  const stopSlider = () => {
    clearInterval(interval);
  }

  const initSlider = () => {
    if (!sliderBlock) {
      return
    } else if (slides.length === 0) {
      return
    } else {
      addStyle();

      sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot, .portfolio-btn')) {
          return
        }

        prevSlide(slides, currentSlide, 'slide-active');
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

        nextSlide(slides, currentSlide, 'slide-active');
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
      createDots();
    }
  }

  initSlider();
}

export default slider