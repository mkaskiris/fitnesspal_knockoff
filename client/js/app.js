function getAllFoods(){
    
    document.querySelector('ul').textContent = ''

    fetch('http://localhost:3000/foods')
    .then(r=>r.json())
    .then(appendFoods)
    .catch(console.warn)
}

function submitFood(e){
    e.preventDefault();
    
    //gather food data
    const foodData = {
        name: e.target.food.value,
        calories: e.target.calories.value
    };

    //post options
    const options = {
        method: 'POST',
        body: JSON.stringify(foodData),
        headers: {
            "Content-Type": "application/json"
        }
    };

    //actually posting to server
    fetch('http://localhost:3000/foods', options)
        .then(r=>r.json())
        .then(appendFood)
        .then(emptyForm)
    
}

function appendFoods(foods){
    foods.forEach(appendFood);
}

//adds foods to a list below form
function appendFood(foodData){
    const newLi = document.createElement('li');
    newLi.textContent = `Name: ${foodData.name} || Calories: ${foodData.calories}`;
    const foodList = document.querySelector('ul')
    foodList.append(newLi);
}

//reset the form
function emptyForm(){
    document.querySelector('#food-form').reset()
}