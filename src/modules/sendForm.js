import { preloader } from "./helpers";

const sendForm = (formId) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  const modal = document.querySelector('.popup');

  const validate = (form) => {
    const formName = form.querySelector('.form-name');
    const email = form.querySelector('.form-email');
    const phone = form.querySelector('.form-phone');
    const message = form.querySelector('#form2-message');

    let isError = true;

    if (message) {
      if (!/[^а-я\s\d\.\,\:\;\!\?]/gi.test(message.value)) {
        message.style.cssText += `box-shadow: none;`;
      } else {
        message.style.cssText += `box-shadow: 0px 0px 12px 2px rgba(255, 0, 0, 1);`;
        isError = false
      }
    }

    if (!/[^а-я\s]/gi.test(formName.value)) {
      formName.style.cssText += `box-shadow: none;`;
    } else {
      formName.style.cssText += `box-shadow: 0px 0px 12px 2px rgba(255, 0, 0, 1);`;
      isError = false
    }

    if (/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(email.value)) {
      email.style.cssText += `box-shadow: none;`;
    } else {
      email.style.cssText += `box-shadow: 0px 0px 12px 2px rgba(255, 0, 0, 1);`;
      isError = false
    }

    if (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/g.test(phone.value)) {
      phone.style.cssText += `box-shadow: none;`;
    } else {
      phone.style.cssText += `box-shadow: 0px 0px 12px 2px rgba(255, 0, 0, 1);`;
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

          if (modal.style.display === 'block') {
            setTimeout(() => {
              modal.style.display = 'none';
            }, 1000)

          }

          setTimeout(() => {
            statusBlock.remove()
          }, 5000)
        })
        .catch(error => {
          preloader(statusBlock, 'Ошибка...');
        })
    } else {
      preloader(statusBlock, 'Неправильно заполнены поля');
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