var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET order items listing. */
router.get('/', function(req, res) {
  db(`SELECT * FROM order_items;`)
  .then((results) => {
    res.send(results.data);
  }) 
  .catch(err => res.status(404).send(err));
})

const getAllOrderItems = (req,res)=> {
  db(`SELECT * FROM order_items;`)
  .then(results => {
    res.send(results.data);
  })  
  .catch(err => res.status(500).send(err));
};

// GET one order item
router.get('/:id', function(req,res) {
  db(`SELECT * FROM order_items WHERE ID=${req.params.id};`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
})

// POST new order item
router.post('/', function(req,res) {
  db(`INSERT INTO orders(tax, service_charges) VALUES(6,0); INSERT INTO order_items (order_id, cost_per_item, product_name, quantity) VALUES(LAST_INSERT_ID(), ${req.body.cost_per_item}, "${req.body.product_name}", 1);`)
  .then(()=>{
    getAllOrderItems(req,res)
  })
  .catch(err => res.status(404).send(err));
})

// UPDATE order item add quantity
router.put('/:id/quantity_add', function(req,res) {
  db(`UPDATE order_items SET quantity = quantity + 1 WHERE ID=${req.params.id};`)
  .then(()=>{
    getAllOrderItems(req,res)
  })
  .catch(err => res.status(404).send(err));
})

// UPDATE order item remove quantity
router.put('/:id/quantity_remove', function(req,res) {
  db(`UPDATE order_items SET quantity = quantity - 1 WHERE ID=${req.params.id};`)
  .then(()=>{
    getAllOrderItems(req,res)
  })
  .catch(err => res.status(404).send(err));
})

// DELETE order item
router.delete('/:id', function(req,res) {
  db(`DELETE FROM order_items WHERE ID=${req.params.id};`)
  .then(()=>{
    getAllOrderItems(req,res)
  })
  .catch(err => res.status(404).send(err));
})

module.exports = router;
