
require('dotenv').config();
const express = require ('express');
const routes = require('./routes/experiencia'); // import the routes
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const app = express()
const apiPort = 3000

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/', routes); //to use the routes

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))