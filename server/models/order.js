const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create order schema & model
const OrderSchema = new Schema({
    title: { 
        type: String },
    url: {
        type: String },
    quantity: { 
        type: String },
    user: {
        type: String,
    },
    userName: {
        type: String,
    },
    addInfo: {
        type: String
    },
    address: {
        type: String
    },
    status: {
        type: String
    }
})


const Order = mongoose.model("order", OrderSchema);

module.exports = Order;


