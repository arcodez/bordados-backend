const mongoose = require("mongoose")

const username = ""
const password = ""
const dbname = ""
const cluster = ""


mongoose.connect(`conection to db mongo ${username} ${password} ${dbname} ${cluster} `, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

const db = mongoose.connect("error", console.error.bind(console("Conection error")));

db.on('conecction', (stream)=> {
    console.log("Db is connected")
})


module.exports = mongoose;