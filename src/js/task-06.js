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


// // console.log(dataLength);


const checkInput = () => {
	if (inputForm.value.length === +dataLength) {
		switchClass(inputForm, "valid", "invalid");
	} else {
		switchClass(inputForm, "invalid", "valid");
	}
};

const switchClass = function (objLink, classAdd, classRemove) {
	objLink.classList.remove(classRemove);
	objLink.classList.add(classAdd);
};

inputForm.addEventListener("blur", checkInput);