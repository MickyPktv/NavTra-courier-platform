const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create order schema & model
const OrderSchema = new Schema({
    products: [{
        title: {
            type: String,
            required: [true, "Title field is required"]
        },
        url: {
            type: String,
            require: [true]
        },
        quantity: {
            type: Number,
        },

    }],
    user: {
        type: String,
    },
    addInfo: {
        type: String
    }
})


const Order = mongoose.model("order", OrderSchema);

module.exports = Order;


