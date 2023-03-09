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

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = document.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const checkLowerCase = (str) => {
  const check = str.toString().toLowerCase();
  if (str === check) {
    return true;
  }
  return false;
};

const validateInputs = (e) => {
  e.preventDefault();
  const form = document.getElementById('form');
  const email = document.getElementById('email').value;
  const emailChecker = checkLowerCase(email);
  if (emailChecker) {
    form.action = 'https://formspree.io/f/mgebklpe';
    form.submit();
  } else {
    setError(email, 'Email should be written in lower case');
  }
};

const form = document.getElementById('form');
form.addEventListener('submit', validateInputs);