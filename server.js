//declare requirements
require('dotenv').config()
const express = require('express')
const app = express()
const {Pool} = require('pg')
const PORT = process.env.PORT || 8000

//app methods
app.use(express.json())
app.use(express.static('public'))

//build and connect to pool
const pool = new Pool ({
        connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})
pool.connect()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////HANDLE REQUESTS//////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////person///////////////////////////////////////////////////////////
//get all from person (admin finctionality)
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
app.post('/person', async (req, res) => {
    try {
        let name = req.body.name
        let password = req.body.password
        let email = req.body.email
        await pool.query(`
            INSERT INTO person (name, password, email)
            VALUES ($1, $2, $3)`, [name, password, email])
        res.json(req.body)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

//update person
app.patch('/person/:id', async (req, res) => {
    try {
        let id = req.params.id
        let name = req.body.name
        let password = req.body.password
        let email = req.body.email
        await pool.query(`
            UPDATE person
            SET name = $1, password = $2, email = $3
            WHERE id = $4`, [name, password, email, id])
            res.json(req.body)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

//delete person
app.delete('/person/:id', async (req, res) => {
    try {
        let id = req.params.id
        await pool.query(`DELETE FROM person WHERE id = $1`, [id])
        res.send(`User ID#:${id} has been deleted`)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

////////////////////////////////////////////////////transactions////////////////////////////////////////////////

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

//get one transaction from one person
app.get('/transactions/:id', async (req, res) => {
    try {
        let id = req.params.id
        let data = await pool.query(`SELECT * FROM transactions WHERE trans_id = $1`, [id])
        res.json(data.rows)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

//get all transactions from one person
app.get('/transactions-of/:id', async (req, res) => {
    try {
        let id = req.params.id
        let data = await pool.query(`
            SELECT name, trans_id, money_in, amount
            FROM person, transactions 
            WHERE transactions.person_id = person.id AND person.id = $1`, [id])
        res.json(data.rows)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

//get all money_in = true from one person
app.get('/transactions-in/:id', async (req, res) => {
    try {
        let id = req.params.id
        let data = await pool.query(`
            SELECT name, trans_id, money_in, amount
            FROM person, transactions 
            WHERE transactions.person_id = person.id AND person.id = $1 AND money_in = true`, [id])
        res.json(data.rows)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})


//get all money_in = false from one person
app.get('/transactions-out/:id', async (req, res) => {
    try {
        let id = req.params.id
        let data = await pool.query(`
            SELECT name, trans_id, money_in, amount
            FROM person, transactions 
            WHERE transactions.person_id = person.id AND person.id = $1 AND money_in = false`, [id])
        res.json(data.rows)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})


//add new transaction
app.post('/transactions', async (req, res) => {
    try {
        let money_in = req.body.money_in
        let kind = req.body.kind
        let amount = req.body.amount
        let person_id = req.body.person_id
        await pool.query(`
            INSERT INTO transactions (money_in, kind, amount, person_id)
            VALUES ($1, $2, $3, $4)`, [money_in, kind, amount, person_id])
        res.json(req.body)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

//update transaction
app.patch('/transactions/:id', async (req, res) => {
    try {
        let person_id = req.params.id
        let money_in = req.body.money_in
        let kind = req.body.kind
        let amount = req.body.amount
        await pool.query(`
            UPDATE transactions
            SET money_in = $1, kind = $2, amount = $3
            WHERE person_id = $4`, [money_in, kind, amount, person_id])
            res.json(req.body)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

//delete one transaction
app.delete('/transactions/:id', async (req, res) => {
    try {
        let id = req.params.id
        await pool.query(`DELETE FROM transactions WHERE trans_id = $1`, [id])
        res.send(`Transaction ID#:${id} has been deleted`)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

//delete all transactions from one person
app.delete('/transactions-clear/:id', async (req, res) => {
    try {
        let id = req.params.id
        await pool.query(`DELETE FROM transactions WHERE person_id = $1`, [id])
        res.send(`User ID#:${id} transaction history: cleared`)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})


//tell server to listen on PORT
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})