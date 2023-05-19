
const categoriesListEl = document.querySelector('#categories');
const categoriesItemsEl = categoriesListEl.querySelectorAll('.item');
console.log(`Numbers of categories : ${categoriesItemsEl.length}`);

categoriesItemsEl.forEach(item => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
})

