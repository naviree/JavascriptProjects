import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
    res.send('<p>Contact us</p>')
  })

app.get('/about', (req, res) => {
  res.send('<p>hello world, how are you doing</p>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})