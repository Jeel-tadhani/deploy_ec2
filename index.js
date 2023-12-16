const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send('Hello World! new commit')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
