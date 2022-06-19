var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET orders listing. */
router.get('/', function(req, res) {
  db(`SELECT * FROM orders;`)
  .then((results) => {
    res.send(results.data);
  }) 
  .catch(err => res.status(404).send(err));
})

const getAllOrders = (req,res)=> {
  db(`SELECT * FROM orders;`)
  .then(results => {
    res.send(results.data);
  })  
  .catch(err => res.status(500).send(err));
};

// GET one order item
router.get('/:id', function(req,res) {
  db(`SELECT * FROM orders WHERE ID=${req.params.id};`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
})

// DELETE order
router.delete('/:id', function(req,res) {
  db(`DELETE FROM orders WHERE ID=${req.params.id};`)
  .then(()=>{
    getAllOrders(req,res)
  })
  .catch(err => res.status(404).send(err));
})

module.exports = router;
