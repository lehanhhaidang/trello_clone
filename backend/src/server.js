import express from 'express'

const app = express()

const hostname = 'localhost'
const port = 8017

app.get('/', function (req, res) {
    res.send('Hello world, Dang dep trai here!')
})

app.listen(port, hostname, () => {
    console.log(`Hello Dang dep trai, I am running at http://${hostname}:${port}/`)
})

