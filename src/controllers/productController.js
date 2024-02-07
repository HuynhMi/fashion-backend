const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

// Post a single product
router.post('/product', (req, res) => {
  console.log(req.body);
  const products = new Product(req.body);

  products.save()
    .then (db => res.status(200).send(db))
    .catch(err => res.status(500).send(err))
});

//read multiple products
router.get('/products', async (req, res) => {
  Product.find({}).then(db => {
    res.send(db);
  }).catch(err => {
    res.status(500).send(err)
  })
});

//get a single product
router.get('/product/:id', (req, res) => {
  const _id = req.params.id;
  Product.findById(_id)
    .then(product => {
      if (!product) return res.status(404).send({ error: 'Product not found' });
      res.status(200).send(product)
    })
    .catch(err => res.status(500).send(err))
});

//update a single product
router.patch('/product/:id', (req, res) => {
  const _id = req.params.id;
  const _db = req.body;
  Product.findByIdAndUpdate(_id, _db, {
    new: true,
    runValidators: true
  })
    .then(product => {
      if (!product) return res.status(404).send({ error: 'Product not found' });
      res.status(200).send(product)
    })
    .catch(err => res.status(500).send(err))
});

//delete a single product
router.delete('/product/:id', (req, res) => {
  const _id = req.params.id;
  Product.findByIdAndDelete(_id)
    .then(product => {
      if (!product) return res.status(404).send({ error: 'Product not found' });
      res.status(200).send("Delete successfully")
    })
    .catch(err => res.status(500).send(err))
});


module.exports = router;