require('dotenv').config() // establish environmental variables in our project

const { PORT = 5000 } = process.env // declare port that project will use

const app = require('./app') // connect app.js 
const listener = () => console.log(`Listening on Port ${PORT}!`) //add a response when port is successfully connected

app.listen(PORT, listener) // set up port listener through express.js