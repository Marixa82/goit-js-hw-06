let counterValue = 0;
const value = document.querySelector('#value');
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');

function updateCounter() {
    value.textContent = counterValue;
}

function incrementCounter() {
    counterValue += 1;
    updateCounter();
}

function decrementCounter() {

    counterValue -= 1;
    updateCounter();

}

incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);






