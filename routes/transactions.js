var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET transactions listing. */
router.get('/', function(req, res) {
  db(`SELECT * FROM transactions;`)
  .then((results) => {
    res.send(results.data);
  }) 
  .catch(err => res.status(404).send(err));
})

const getTransactions = (req,res)=> {
  db(`SELECT * FROM transactions;`)
  .then(results => {
    res.send(results.data);
  })  
  .catch(err => res.status(500).send(err));
};

// GET one transactions
router.get('/:id', function(req,res) {
  db(`SELECT * FROM transactions WHERE ID=${req.params.id};`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
})

// POST new transactions
router.post('/', function(req,res) {
  db(`INSERT INTO transactions(ID, payment_method, status, paid_amount_cents) VALUES(LAST_INSERT_ID(), "${req.body.payment_method}", "${req.body.status}", ${req.body.paid_amount_cents});`)
  .then(()=>{
    getTransactions(req,res)
  })
  .catch(err => res.status(404).send(err));
})

// DELETE transactions
router.delete('/:id', function(req,res) {
  db(`DELETE FROM transactions WHERE ID=${req.params.id};`)
  .then(()=>{
    getTransactions(req,res)
  })
  .catch(err => res.status(404).send(err));
})

module.exports = router;
