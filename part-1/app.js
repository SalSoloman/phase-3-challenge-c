const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('A New Simple App')
})

app.get('/api/shout/:word', (req, res) => {
  const word = req.params.word.toUpperCase()
  res.header({ ContentType: 'application/text' })
  res.send(`${word}!!!`)
})


app.post('/api/array/merge', (req, res) => {
  const {a, b} = req.body

  if (!Array.isArray(a) || !Array.isArray(b)) {
    res.status(400).send('Input data should be of type Array.')
  }

  let mergedArray = a.map((currentValue, index) => {
    return [currentValue, b[index]]
  }).reduce((x, y) => x.concat(y)).concat(b.slice(a.length))

  res.send({
    result: mergedArray
  })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
