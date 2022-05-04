const validation = () => {
  const calcInputs = document.querySelectorAll('.calc-item');
  const formEmails = document.querySelectorAll('.form-email');
  const formPhone = document.querySelectorAll('.form-phone');
  const formName = document.querySelectorAll('.form-name');

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
    name.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\d/, "")
    })
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

