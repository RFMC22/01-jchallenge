const button = document.querySelector('#button');
const error = document.querySelector('#error');

events();
function events() {
  button.addEventListener('click', showError);  
}

function showError() {
  error.style.display = 'block';
  setTimeout(() => {
    error.style.display = 'none';
  }, 2000);
}