require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('Hello twitter!')
})
app.get('/youtube', (req, res) => {
  res.send('<h2>chai with piyush!</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
