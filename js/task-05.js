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

