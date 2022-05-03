const timer = (deadline) => {
  const timerDays = document.getElementById('timer-days');
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');
  let timer;

  const getRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let seconds = Math.floor(timeRemaining % 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let days = Math.floor(timeRemaining / 60 / 60 / 24);

    return { timeRemaining, seconds, minutes, hours, days }
  }

  const updateClock = () => {
    let getTime = getRemaining();

    timerDays.textContent = getTime.days < 10 ? `0${getTime.days} :` : `${getTime.days} :`;
    timerHours.textContent = getTime.hours < 10 ? `0${getTime.hours} :` : `${getTime.hours} :`;
    timerMinutes.textContent = getTime.minutes < 10 ? `0${getTime.minutes} :` : `${getTime.minutes} :`;
    timerSeconds.textContent = getTime.seconds < 10 ? `0${getTime.seconds}` : getTime.seconds;
  }

  const clearClock = () => {
    timerDays.textContent = '00';
    timerHours.textContent = '00';
    timerMinutes.textContent = '00';
    timerSeconds.textContent = '00';
  }

  updateClock();

  timer = setInterval(() => {
    let getTime = getRemaining();

    if (getTime.timeRemaining > 0) {
      updateClock();
    } else {
      clearInterval(timer);
      clearClock();
    }
  }, 1000);
}

export default timer