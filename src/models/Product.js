const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ProductSchema = new Schema({
    name: {
        type: String
    },
    desc: {
        type: String
    },
    price: {
        type: Number

    },
    imgUrl: {
        type: String
    },
    quantity: {
        type: Number
    },
    type: {
        type: String
    },

})

const Product = model("Product", ProductSchema)

module.exports = Product;