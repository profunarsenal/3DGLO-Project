const validation = () => {
  const calcInputs = document.querySelectorAll('.calc-item');
  const mainForm = document.querySelector('#form1');
  const footerForm = document.querySelector('#form2');
  const modalForm = document.querySelector('#form3');
  const formEmails = document.querySelectorAll('.form-email');
  const formPhone = document.querySelectorAll('.form-phone');
  const formName = document.querySelectorAll('.form-name');

  const checkForm = (e) => {
    e.preventDefault();

    const email = e.target.querySelector('.form-email');
    const phone = e.target.querySelector('.form-phone');
    const message = e.target.querySelector('#form2-message');

    let isError = false;

    if (message) {
      if (!/[^а-яА-Я]/g.test(message.value)) {
      } else {
        isError = true
      }
    }

    if (!/[^\w\@\.\~\-\!\'\*]/g.test(email.value)) {
    } else {
      isError = true
    }

    if (!/[^\d\(\)\-]/g.test(phone.value)) {
    } else {
      isError = true
    }

    if (!isError) {
      console.log('Данные отправлены')
    }
  }

  mainForm.addEventListener('submit', checkForm);
  footerForm.addEventListener('submit', checkForm);
  modalForm.addEventListener('submit', checkForm);

  calcInputs.forEach((item, index) => {
    if (index > 0) {
      item.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/, "")
      })
    }
  })

  formEmails.forEach(email => {
    email.addEventListener('blur', () => {
      email.value = email.value.replace(/[^\w\@\.\~\-\!\'\*\s]/g, '');
      email.value = email.value.replace(/(^\s+|\s+$)|(^\-+|\-+$)/g, '');
      email.value = email.value.replace(/-{2,}/g, '-');
      email.value = email.value.replace(/\s{2,}/g, ' ');
    })
  })

  formPhone.forEach(phone => {
    phone.addEventListener('blur', () => {
      phone.value = phone.value.replace(/[^\d\(\)\-\s]/g, '');
      phone.value = phone.value.replace(/(^\s+|\s+$)|(^\-+|\-+$)/g, '');
      phone.value = phone.value.replace(/-{2,}/g, '-');
      phone.value = phone.value.replace(/\s{2,}/g, ' ');
    })
  })

  formName.forEach(name => {
    name.addEventListener('blur', () => {
      name.value = name.value.replace(/(^\s+|\s+$)|(^\-+|\-+$)/g, '');
      name.value = name.value.replace(/-{2,}/g, '-');
      name.value = name.value.replace(/\s{2,}/g, ' ');
      name.value = name.value.replace(/[а-яa-z]+/gi, (str) => {
        return str[0].toUpperCase() + str.slice(1);
      })
    })
  })

}

export default validation

