const block = document.querySelectorAll('.block');
const date = new Date();

function showGreetings() {
  if (date.getHours() >= 6 && date.getHours() < 12) {
    block[0].textContent = `Доброе утро`;
  } else if (date.getHours() >= 12 && date.getHours() <= 17) {
    block[0].textContent = `Добрый день`;
  } else if (date.getHours() >= 17 && date.getHours() <= 22) {
    block[0].textContent = `Добрый вечер`;
  } else {
    block[0].textContent = `Доброй ночи`;
  }
}

function showToday() {
  const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  block[1].textContent = `Сегодня: ${week[date.getDay()]}`
}

function showTime() {
  block[2].textContent = `Текущее время: ${date.toLocaleTimeString('en')}`
}

function daysBeforeNewYear() {
  const arrDays = [' день', ' дня', ' дней'];
  let newYear = new Date(2023, 0, 1).getTime();
  let timeRemaining = newYear - date.getTime();
  let days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

  const changeWords = (num, arr) => {
    if (num >= 5 && num <= 20 || num === 0) {
      return num + arr[2]
    } else if (num % 10 >= 2 && num % 10 <= 4) {
      return num + arr[1]
    } else if (num % 10 === 1) {
      return num + arr[0]
    } else {
      return num + arr[2]
    }
  }

  block[3].textContent = `До нового года осталось ${changeWords(days, arrDays)}`;
}

showGreetings()
showToday()
showTime()
daysBeforeNewYear()