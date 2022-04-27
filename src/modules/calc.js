const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = calcBlock.querySelector('.calc-type');
  const calcSquare = calcBlock.querySelector('.calc-square');
  const calcCount = calcBlock.querySelector('.calc-count');
  const calcDay = calcBlock.querySelector('.calc-day');
  const total = calcBlock.querySelector('#total');

  const debounce = (fn, ms) => {
    let timer;

    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, ms)
    }
  }

  function animateNumber(num, elem) {
    let time = num < 10000 ? 100 : 10;
    let step = num < 10000 ? 100 : 1000;
    let count = 0;
    let timeStep = Math.round(time / (num / step));

    let interval = setInterval(() => {
      count += step;

      if (count === num) {
        clearInterval(interval)
      }

      elem.textContent = count;
    }, timeStep)
  }

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = +calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcTypeValue && calcSquareValue) {
      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    if (totalValue > 0) {
      animateNumber(totalValue, total)
    } else {
      total.textContent = 0;
    }
  }

  animateNumber = debounce(animateNumber, 300);

  calcBlock.addEventListener('input', (e) => {
    if (e.target === calcType || e.target === calcSquare ||
      e.target === calcCount || e.target === calcDay) {
      countCalc()
    }
  })

}

export default calc