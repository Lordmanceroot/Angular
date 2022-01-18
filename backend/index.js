const express = require('express')
const products = require("../src/app/mock/data.mock.json");
const app = express()
const port = 3000

app.get('/products', (req, res) => {
  res.send(products);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
