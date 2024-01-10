const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api', (req, res) => {
    res.json({message: 'Hello from ExpressJS!'})
})

app.listen(port, () => {
    console.log('Server running on Port: ', port)
})