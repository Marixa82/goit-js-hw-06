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

// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
//     Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже додали у вихідні файли завдання.