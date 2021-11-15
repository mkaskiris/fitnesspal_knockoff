const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json());
app.use(cors());

const foodInput = require('./controllers/foods')
app.use('/foods', foodInput);


//render the webpage on top of the server?
app.get('/', (req,res) =>{
    res.send('Server up and running')
})
module.exports = app;