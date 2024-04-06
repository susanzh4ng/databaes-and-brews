import express from "express";
import mysql from "mysql2";
import cors from "cors";
const port = 8800

const app = express() /* api requests via express server */
const db = mysql.createConnection({ /* connecting webapp to db */
    host:"localhost",
    user:"root",
    password:"wenXuan0709!",
    database:"databaes"
})
app.use(express.json()) //allows app to send json data through a client
app.use(cors()) //allows app to use backend api

/*
app.get("/", (req,res)=> {
    res.json("hello")
})
*/

// @desc Get cafe
// @route GET /cafe
app.get("/cafe", (req,res) => {
    const q = "SELECT * FROM databaes.cafe"
    db.query(q, (err, data) => { //running query q through our db
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json(data)
        }
    }) 
})

// @desc Post cafe
// @route POST /cafe
app.post("/cafe", (req,res) => {
    const q = "INSERT INTO cafe (`address`, `manager`, `revenue`) VALUES (?)"
    const values = [ /* data for post request is from req.body */
        req.body.address,
        req.body.manager,
        req.body.revenue
    ]
    db.query(q, [values], (err, data) => { //running query q through our db
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Cafe has been added.")
        }
    }) 
})

// @desc Delete cafe
// @route DELETE /cafe/:cafe_id
app.delete("/cafe/:id", (req, res) => {
    const cafeId = req.params.id;
    const q = "DELETE FROM cafe WHERE cafe_id = ?"
    
    db.query(q, [cafeId], (err,data) => {
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Cafe has been deleted.")
        }
    })
})

// @desc Update cafe
// @route PUT /cafe/:cafe_id
app.put("/cafe/:id", (req, res) => {
    const cafeId = req.params.id;
    const q = "UPDATE cafe SET `address` = ?, `manager` = ?, `revenue` = ? WHERE cafe_id = ?";
    const values = [
        req.body.address,
        req.body.manager,
        req.body.revenue
    ]

    db.query(q, [...values,cafeId], (err,data) => {
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Cafe has been updated.")
        }
    })
})


/* app running on port 8800 */
app.listen(port, () => console.log(`Server started on port ${port}`))