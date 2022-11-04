const form = document.querySelector("#form");
const email = document.querySelector("#email");
const errorMessage = document.querySelector("em");

const emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


email.addEventListener('input', (n) => {

  var emailValue = email.value;

  if (emailRegEx.test(emailValue) === true) {
    email.classList.remove('hover-error');
    email.classList.remove('email-error');
    errorMessage.classList.remove('hover-error');
    errorMessage.classList.remove('error-message');
  } else {
    email.classList.add('hover-error');
    errorMessage.classList.add('hover-error');
  }
});



form.addEventListener('submit', (e) => {

  var emailValue = email.value;

  if (emailRegEx.test(emailValue) === true) {
    email.classList.remove('email-error');
    errorMessage.classList.remove('error-message');
  } else {
    email.classList.add('email-error');
    errorMessage.classList.add('error-message');
    e.preventDefault();
  }
});
