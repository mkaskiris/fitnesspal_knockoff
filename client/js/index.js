// linking buttons with functionality
const form = document.querySelector('#food-form')
const btn = document.querySelector('#get-all')


form.addEventListener('submit', submitFood);
btn.addEventListener('click', getAllFoods);