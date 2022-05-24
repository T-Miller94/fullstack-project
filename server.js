//declare requirements
const express = require('express')
const app = express()
const {Pool} = require('pg')
const PORT = process.env.PORT || 8000

//app methods
app.use(express.json())
app.use(express.static('public'))

//build and connect to pool
const pool = new Pool ({
    host: 'localhost',
    database: 'budget_tracker',
    user: 'alex',
    password: '1313',
    port: 5432
})
pool.connect()

//////////////////////////HANDLE REQUESTS////////////////////////////
//get all from person (admin finctionality)
// app.get('/')
app.get('/person', async (req, res) => {
    try {
        let data = await pool.query(`SELECT * FROM person`)
        res.json(data.rows)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

//get one from person
app.get('/person/:id', async (req, res) => {
    try {
        let id = req.params.id
        let data = await pool.query(`SELECT * FROM person WHERE id = $1`, [id])
        res.json(data.rows)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

//add new person

//update person

//delete person


//get all from transactions (admin finctionality)
app.get('/transactions', async (req, res) => {
    try {
        let data = await pool.query(`SELECT * FROM transactions`)
        res.json(data.rows)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

//get all transactions from one person
app.get('/transactions/:id', async (req, res) => {
    try {
        let id = req.params.id
        let data = await pool.query(`SELECT * FROM transactions WHERE id = $1`, [id])
        res.json(data.rows)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

//get one transaction from one person

//add new transaction

//delete transaction

//update transaction

//tell server to listen on PORT
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})