const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create order schema & model
const OrderSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title field is required"]
    },
    content: {
        type: String,
        require: [true]
    },
    cookingTime: {
        type: Number,
    }

    
})


const Order = mongoose.model("order", OrderSchema);

module.exports = Order;


