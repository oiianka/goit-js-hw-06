// Напиши скрипт который, при наборе текста в инпуте 
// input#name-input (событие input), подставляет его 
// текущее значение в span#name-output. Если инпут пустой, 
// в спане должна отображаться строка "Anonymous".

const inputForm = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');



inputForm.addEventListener("input", (event) => {
    // userName.textContent = event.currentTarget.value;
    if(event.currentTarget.value === ""){
        userName.textContent = "Anonymous";
    }
    else {userName.textContent = event.currentTarget.value;}

});

