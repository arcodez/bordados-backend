const express = require("express")
const app = express()

app.use(express.json());

 // set routes from routes file
app.use(require('./routes/index.routes'));
 
module.exports = app