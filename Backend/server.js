const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"databaseprogramming24",
    database: 'global_fast_foods'
})
app.get('/', (req, res) => {
    return res.json("Server running")
})



app.get('/user/', (req, res)=>{
    const sql = `SELECT UPPER(l_name), f_name, city FROM employee `;
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
            res.status(200).json(data)
            console.log(data)
    })
})

app.get('/user/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const sql = `SELECT UPPER(l_name), f_name, city FROM employee WHERE id = ${id} `;
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
            res.status(200).json(data)
            console.log(data)
    })
})

app.get('/skill', (req, res)=>{
    const sql = `SELECT name, description FROM skill `
})



app.post('/post', (req, res) => {
    const id = req.body.id
    const l_name = req.body.l_name
    const f_name = req.body.f_name
    const city = req.body.city

    db.query('insert into table employee (?,?,?,?) ', [id, l_name, f_name, city], (err, result) => {
        if(err) throw err;
        res.send("POSTED");
    } )
})







app.listen(8081, () => {
    console.log("listening on 8081");
    db.connect((err)=>{
        if(err) throw err;
        console.log("db connected");
    })
})