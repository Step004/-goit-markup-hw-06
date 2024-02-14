const closeForm = document.querySelector('.close');
const form = document.querySelector('.form');
const buttonForm = document.querySelector('.button');
const mobileMenuBtn = document.querySelector('.mobile-open-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobileMenu = document.querySelector('.close-mobile-menu');

function removeClassToButton() {
  form.classList.remove('is-open');
}
function addClassToButton() {
  form.classList.add('is-open');
}
function addClassToMobileMenu() {
  mobileMenu.classList.add('is-open');
}
function removeClassToMobileMenu() {
  mobileMenu.classList.remove('is-open');
}

closeForm.addEventListener('click', removeClassToButton);
buttonForm.addEventListener('click', addClassToButton);
mobileMenuBtn.addEventListener('click', addClassToMobileMenu);
closeMobileMenu.addEventListener('click', removeClassToMobileMenu);
console.log(closeMobileMenu);
