require('dotenv');
require('dotenv').config();

require('./db/mongoose');

const express = require('express');

const productController = require('./controllers/productController');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.post('/product', function (req, res) {
  console.log(req.body);
  res.send('testing');
})
// app.use('/api', productController);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});