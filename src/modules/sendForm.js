import { preloader } from "./helpers";

const sendForm = (formId) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');

  const validate = (form) => {
    const formName = form.querySelector('.form-name');
    const email = form.querySelector('.form-email');
    const phone = form.querySelector('.form-phone');
    const message = form.querySelector('#form2-message');

    let isError = true;

    if (message) {
      if (!/[^а-я\s\d\.\,\:\;\!\?]/gi.test(message.value)) {
      } else {
        isError = false
      }
    }

    if (!/[^а-я\s]/gi.test(formName.value)) {
    } else {
      isError = false
    }

    if (!/[^\w\@\.\~\-\!\'\*]/g.test(email.value)) {
    } else {
      isError = false
    }

    if (!/[^\d\(\)\+\-]/g.test(phone.value)) {
    } else {
      isError = false
    }

    return isError

  }

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  }

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    preloader(statusBlock)
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    })

    if (validate(form)) {
      sendData(formBody)
        .then(data => {
          formElements.forEach(input => {
            input.value = '';
          })

          preloader(statusBlock, 'Спасибо, наш менеджер с вами свяжется!');
        })
        .catch(error => {
          preloader(statusBlock, 'Ошибка...');
        })
    } else {
      preloader(statusBlock, 'Ошибка: Данные не валидны');
    }
  }

  try {
    if (!form) {
      throw new Error('Отсутсвует форма')
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitForm();
    })
  } catch (error) {
    console.log(error.message)
  }

}

export default sendForm