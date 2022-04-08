const express = require("express");
const Order = require("../models/order");
const router = express.Router();

// get list of orders from db
router.get('/orders',(req,res, next) => {
    Order.find({}).then(function(orders){
        res.send(orders);
    });
});


// add new order to the db
router.post('/orders',(req,res, next) => {
    Order.create(req.body).then(function(order){
        res.send(order)
        }).catch(next);
    });


// update order in the db
router.put('/orders/:id',(req,res, next) => {
    Order.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Order.findOne({_id: req.params.id}).then(function(order){
            res.send(order)
        });
    });
});


// delete order from the db
router.delete('/orders/:id',(req,res, next) => {
    Order.findByIdAndRemove({_id: req.params.id}).then(function(order){
    res.send(order)
});
});

module.exports = router;



