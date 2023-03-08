/* eslint linebreak-style: ["error", "windows"] */

const hamburger = document.querySelector('.nav-log');
const navMenu = document.querySelector('.nav-menu');
const containerMain = document.querySelector('.container-main');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  containerMain.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  containerMain.classList.remove('active');
}));

/* validationForm */

const email = document.getElementById('email');

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const validateInputs = (e) => {
  e.preventDefault();
  const emailValue = email.value;
  const form = document.getElementById('form');

  if (emailValue === emailValue.toUpperCase()) {
    setError(email, 'Email should be written in lower case');
  } else {
    form.action = ('https://formspree.io/f/mgebklpe');
    form.submit();
  }
};

const form = document.getElementById('form');
form.addEventListener('click', validateInputs);