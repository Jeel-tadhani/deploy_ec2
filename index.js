const express = require('express');
const morgan = require('morgan');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3001

app.use(morgan('tiny'));
app.get('/', (req, res) => {
    res.send('Hello World! new commit')
})

app.get('/home', (req, res) => {
    res.send('this is home page')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
