const inputEl = document.querySelector('#font-size-control');
const textInputEl = document.querySelector('#text');
inputEl.addEventListener('input', onInputChange);
function onInputChange() {
    const fontSize = inputEl.value + 'px';
    textInputEl.style.fontSize = fontSize;
}

