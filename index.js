const express = require('express')
const app = express()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cors = require("cors");
app.use(cors());
const port = 3000
const apiKey = "91d0d4a7e7a647bb8419d103c3a75d95"



app.get('/news/:category/:pageNo', async (req, res) => {
  let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${req.params.category}&page=${req.params.pageNo}&pageSize=6`)
  let json = await data.json()
  res.send(json)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})