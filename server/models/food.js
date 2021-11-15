const foodData = require('../data')

/**
 * defines food class
 * method for creating a new object and adding it to the db
 * method for getting all foods from the db
 */
class Food{
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.calories = data.calories;
    }

    static get all(){
        const foods = foodData.map((food) => new Food(food));
        return foods;
    }

    static create(food){
        const newFoodId = foodData.length + 1;
        const newFood = new Food({id: newFoodId, ...food});
        foodData.push(newFood);
        return newFood
    }
}

module.exports = Food;