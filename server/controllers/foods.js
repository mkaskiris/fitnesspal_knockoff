//routers file

const express = require('express')
const router = express.Router()


const Food = require('../models/food');

//returns all the foods in the db
router.get('/', (req,res) =>{
    const foodData = Food.all;
    res.send(foodData);
})

//adds a food to the db
router.post('/', (req, res) => {
    const data = req.body;
    const newFood = Food.create(data);
    res.status(201).send(newFood);
})

//delete a food from the db
router.delete('/', (req, res) =>{
    res.status().send()
})

module.exports = router;