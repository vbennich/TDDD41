const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/one', (req, res) => res.send("1"))

app.get('/two', (req, res) => res.send("2"))

app.get('/three', (req, res) => res.send("3"))

app.get('/four', (req, res) => res.send("4"))

app.get('/five', (req, res) => res.send("5"))

app.get('/six', (req, res) => res.send("6"))

app.get('/seven', (req, res) => res.send("7"))

app.get('/eight', (req, res) => res.send("8"))

app.get('/nine', (req, res) => res.send("9"))

app.get('/ten', (req, res) => res.send("10"))

app.listen(port, () => console.log(`Example" app listening on port ${port}!`))

module.exports = app
