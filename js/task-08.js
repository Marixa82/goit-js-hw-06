
const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    if (formEl.email.value === '' || formEl.password.value === '') {
        alert(`всі поля повинні бути заповнені`);
    } else {
        const data = {
            username: formEl.email.value,
            password: formEl.password.value
        };
        console.dir(data);
        formEl.reset();
    }
}


