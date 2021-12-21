// Напиши скрипт, который при потере фокуса на инпуте 
// (событие blur), проверяет его содержимое на правильное 
// количество введённых символов

// Сколько символов должно быть в инпуте, указывается в его 
// атрибуте data-length.
// Если введено подходящее количество символов, то border 
// инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, 
// которые мы уже добавили в исходные файлы задания.

const inputForm = document.querySelector('#validation-input');
const dataLength = inputForm.getAttribute("data-length");

// console.log(dataLength);

  inputForm.addEventListener("blur", function (event) {
    if (inputForm.value.length == dataLength) {
        // console.log('ok');
        inputForm.classList.remove('invalid');
        inputForm.classList.add('valid');
    } else {
    //  console.log('not ok');
     inputForm.classList.remove('valid');
     inputForm.classList.add('invalid');
    }
  });