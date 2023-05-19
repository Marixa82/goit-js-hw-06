const textInputEl = document.querySelector('#validation-input');

textInputEl.addEventListener('blur', () => {
    const inputValue = textInputEl.value.trim();
    const nameLength = parseInt(textInputEl.getAttribute("data-length"));

    textInputEl.classList.remove("valid", "invalid");

    if (inputValue.length === nameLength) {
        textInputEl.classList.add("valid");
    } else {
        textInputEl.classList.add("invalid");
    }
});

