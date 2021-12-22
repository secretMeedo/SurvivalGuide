const express = require('express')
const { readFile } = require('fs')

const app = express()

app.get('/', (request, response) => {
  readFile('./home.html', 'utf-8', (err, html) => {
    if (err) {
      response.status(500).send('sorry, out of order')
    }
    response.send(html)
  })
})
