// Обработка отправки формы form.login-form должна быть 
// по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с 
// предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, 
// собери значения полей в обьект, где имя поля будет 
// именем свойства, а значение поля - значением свойства. 
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти 
// значения полей формы методом reset.

let obj = {};

const form = document.forms[0];
const inputForms = document.querySelectorAll('input');
const loginForm = form.elements.email;
const passwordForm = form.elements.password;
const createItem = document.createElement('p');
const loginFormName = loginForm.getAttribute('name');
const passwordFormName = passwordForm.getAttribute('name');

// console.log(passwordFormName)


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password }
  } = event.currentTarget;

  if (loginForm.value === "" || passwordForm.value === "") {
    createItem.textContent = "Please fill in all the fields!";
createItem.setAttribute('id', 'alert');
createItem.setAttribute('style', 'color:red');
createItem.setAttribute('style', 'color:red');
form.append(createItem);

    return console.log("Please fill in all the fields!");
    
 

  }
  const alertStr = document.querySelector('#alert');
  // console.log(`Login: ${loginForm.value}, Password: ${passwordForm.value}`);
  obj[loginFormName] = loginForm.value;
  obj[passwordFormName] = passwordForm.value;

  // console.log(passwordFormName);
  console.log(obj);

  event.currentTarget.reset();
  alertStr.remove();
  
}