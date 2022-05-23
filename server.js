const express = require('express')
const app = express()
const {Pool} = require('pg')
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})