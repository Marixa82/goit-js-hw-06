const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
inputEl.addEventListener('input', onClick);

function onClick() {
    if (inputEl.value.trim() !== "") {
        outputEl.textContent = inputEl.value;
    } else {
        outputEl.textContent = 'Anonymous';
    }

}

// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input), підставляє його поточне значення в span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".