const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ServiceSchema = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    }
})

const Service = model('Service', ServiceSchema)

module.exports = Service