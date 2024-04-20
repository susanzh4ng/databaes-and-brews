import express from "express";
import mysql from "mysql2";
import cors from "cors";
const port = 8800

const app = express() /* api requests via express server */
const db = mysql.createConnection({ /* connecting webapp to db */
    host:"localhost",
    user:"root",
    password:"password",
    database:"databaes"
})
app.use(express.json()) //allows app to send json data through a client
app.use(cors()) //allows app to use backend api

let assignment6Id = null
let assignment6F_name = ""
let assignment6L_name =  ""
let assignment6Email = ""
let assignment6Address =  ""

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


// @desc Get customer
// @route GET /customer
app.get("/customer", (req,res) => {
    const q = "SELECT * FROM databaes.customer"
    db.query(q, (err, data) => { //running query q through our db
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json(data)
        }
    }) 
})

// @desc Post customer
// @route POST /customer
app.post("/customer", (req,res) => {
    const q = "INSERT INTO customer (`f_name`, `l_name`, `loyalty_points`, `email`) VALUES (?)"
    const values = [ /* data for post request is from req.body */
        req.body.f_name,
        req.body.l_name,
        req.body.loyalty_points,
        req.body.email
    ]
    db.query(q, [values], (err, data) => { //running query q through our db
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Customer has been added.")
        }
    }) 
})

// @desc Delete customer
// @route DELETE /customer/:c_id
app.delete("/customer/:id", (req, res) => {
    const c_id = req.params.id;
    const q = "DELETE FROM customer WHERE c_id = ?"
    
    db.query(q, [c_id], (err,data) => {
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Customer has been deleted.")
        }
    })
})

// @desc Update customer
// @route PUT /customer/:c_id
app.put("/customer/:id", (req, res) => {
    const c_id = req.params.id;
    const q = "UPDATE customer SET `f_name` = ?, `l_name` = ?, `loyalty_points` = ?, `email` = ? WHERE c_id = ?";
    const values = [
        req.body.f_name,
        req.body.l_name,
        req.body.loyalty_points,
        req.body.email
    ]

    db.query(q, [...values,c_id], (err,data) => {
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Customer has been updated.")
        }
    })
})


// @desc Get employee
// @route GET /employee
app.get("/employee", (req,res) => {
    const q = "SELECT * FROM databaes.employee"
    db.query(q, (err, data) => { //running query q through our db
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json(data)
        }
    }) 
})

// @desc Post employee
// @route POST /employee
app.post("/employee", (req,res) => {
    const q = "INSERT INTO employee (`phone_number`, `f_name`, `l_name`, `position`, `location_id`, `salary`) VALUES (?)"
    const values = [ /* data for post request is from req.body */
        req.body.phone_number,
        req.body.f_name,
        req.body.l_name,
        req.body.position,
        req.body.location_id,
        req.body.salary,
    ]
    db.query(q, [values], (err, data) => { //running query q through our db
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Employee has been added.")
        }
    }) 
})

// @desc Delete employee
// @route DELETE /employee/:e_id
app.delete("/employee/:id", (req, res) => {
    const e_id = req.params.id;
    const q = "DELETE FROM employee WHERE e_id = ?"
    
    db.query(q, [e_id], (err,data) => {
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Employee has been deleted.")
        }
    })
})

// @desc Update employee
// @route PUT /employee/:e_id
app.put("/employee/:id", (req, res) => {
    const e_id = req.params.id;
    const q = "UPDATE employee SET `phone_number` = ?, `f_name` = ?, `l_name` = ?, `position` = ?, `location_id` = ?, `salary` = ? WHERE e_id = ?";
    const values = [
        req.body.phone_number,
        req.body.f_name,
        req.body.l_name,
        req.body.position,
        req.body.location_id,
        req.body.salary,
    ]

    db.query(q, [...values,e_id], (err,data) => {
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Employee has been updated.")
        }
    })
})


// @desc Get orders
// @route GET /orders
app.get("/orders", (req,res) => {
    const q = "SELECT * FROM databaes.orders"
    db.query(q, (err, data) => { //running query q through our db
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json(data)
        }
    }) 
})

// @desc Post orders
// @route POST /orders
app.post("/orders", (req,res) => {
    const q = "INSERT INTO orders (`product_p_id`, `customer_c_id`, `employee_e_id`) VALUES (?)"
    const values = [ /* data for post request is from req.body */
        req.body.product_p_id,
        req.body.customer_c_id,
        req.body.employee_e_id
    ]
    db.query(q, [values], (err, data) => { //running query q through our db
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Order has been added.")
        }
    }) 
})

// @desc Delete order
// @route DELETE /orders/:o_number
app.delete("/orders/:id", (req, res) => {
    const o_number = req.params.id;
    const q = "DELETE FROM orders WHERE o_number = ?"
    
    db.query(q, [o_number], (err,data) => {
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Order has been deleted.")
        }
    })
})

// @desc Update order
// @route PUT /orders/:o_number
app.put("/orders/:id", (req, res) => {
    const o_number = req.params.id;
    const q = "UPDATE orders SET `product_p_id` = ?, `customer_c_id` = ?, `employee_e_id` = ? WHERE o_number = ?";
    const values = [
        req.body.product_p_id,
        req.body.customer_c_id,
        req.body.employee_e_id
    ]

    db.query(q, [...values,o_number], (err,data) => {
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Order has been updated.")
        }
    })
})


// @desc Get product
// @route GET /product
app.get("/product", (req,res) => {
    const q = "SELECT * FROM databaes.product"
    db.query(q, (err, data) => { //running query q through our db
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json(data)
        }
    }) 
})

// @desc Post product
// @route POST /product
app.post("/product", (req,res) => {
    const q = "INSERT INTO product (`name`, `recipe`, `price`) VALUES (?)"
    const values = [ /* data for post request is from req.body */
        req.body.name,
        req.body.recipe,
        req.body.price
    ]
    db.query(q, [values], (err, data) => { //running query q through our db
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Product has been added.")
        }
    }) 
})

// @desc Delete product
// @route DELETE /product/:p_id
app.delete("/product/:id", (req, res) => {
    const p_id = req.params.id;
    const q = "DELETE FROM product WHERE p_id = ?"
    
    db.query(q, [p_id], (err,data) => {
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Product has been deleted.")
        }
    })
})

// @desc Update product
// @route PUT /product/:p_id
app.put("/product/:id", (req, res) => {
    const p_id = req.params.id;
    const q = "UPDATE product SET `name` = ?, `recipe` = ?, `price` = ? WHERE p_id = ?";
    const values = [
        req.body.name,
        req.body.recipe,
        req.body.price
    ]

    db.query(q, [...values,p_id], (err,data) => {
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Product has been updated.")
        }
    })
})


// @desc Get stock
// @route GET /sold_in
app.get("/sold_in", (req,res) => {
    const q = "SELECT * FROM databaes.sold_in"
    db.query(q, (err, data) => { //running query q through our db
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json(data)
        }
    }) 
})

// @desc Post stock
// @route POST /sold_in
app.post("/sold_in", (req,res) => {
    const q = "INSERT INTO sold_in (`cafe_c_id`, `product_p_id`) VALUES (?)"
    const values = [ /* data for post request is from req.body */
        req.body.cafe_c_id,
        req.body.product_p_id
    ]
    db.query(q, [values], (err, data) => { //running query q through our db
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Stock has been added.")
        }
    }) 
})

// @desc Delete stock
// @route DELETE /sold_in/:supply_id
app.delete("/sold_in/:id", (req, res) => {
    const supply_id = req.params.id;
    const q = "DELETE FROM sold_in WHERE supply_id = ?"
    
    db.query(q, [supply_id], (err,data) => {
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Stock has been deleted.")
        }
    })
})

// @desc Update stock
// @route PUT /sold_in/:supply_id
app.put("/sold_in/:id", (req, res) => {
    const supply_id = req.params.id;
    const q = "UPDATE sold_in SET `cafe_c_id` = ?, `product_p_id` = ? WHERE supply_id = ?";
    const values = [
        req.body.cafe_c_id,
        req.body.product_p_id
    ]

    db.query(q, [...values,supply_id], (err,data) => {
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Stock has been updated.")
        }
    })
})




// @desc Post WORKER
// @route POST /assignment6
app.post("/assignment6", (req,res) => {
    assignment6Id = req.body.id;
    assignment6F_name = req.body.f_name;
    assignment6L_name = req.body.l_name;
    res.sendStatus(200); 
    console.log(assignment6Id, assignment6F_name, assignment6L_name);
})


// @desc Get WORKER - part a: select with injection
// @route GET /assignment6
app.get("/assignment6", (req,res) => {
    console.log(assignment6Id, assignment6F_name, assignment6L_name);
    const q = "SELECT `id`, `f_name`, `l_name`, `salary`, `email`, `address` FROM databaes.assignment6 WHERE f_name = '"+assignment6F_name+"' AND l_name='"+assignment6L_name+"' AND id = "+assignment6Id+";"

    db.query(q, (err, data) => { //running query q through our db
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json(data)
        }
    }) 
})

// @desc Get WORKER - part c: select with prepared statement
// @route PUT /assignment6/:id
// @desc Get WORKER
// @route GET /assignment6
app.get("/assignment6", (req,res) => {
    console.log(assignment6Id, assignment6F_name, assignment6L_name);
    const q = "SELECT `id`, `f_name`, `l_name`, `salary`, `email`, `address` FROM databaes.assignment6 WHERE f_name = ? AND l_name = ? AND id = ?";

    // Use prepared statement
    db.query(q, [assignment6F_name, assignment6L_name, assignment6Id], (err, data) => {
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json(data)
        }
    }) 
})

// @desc Update worker - Part b (SQL Injection)
// @route PUT /assignment6/update-inject
app.put("/assignment6/:id", (req, res) => {
    const { email, address } = req.body;
    const id = req.params.id; // Assuming assignment6Id is set globally

    // Construct the SQL query with potential for SQL injection
    const q = `UPDATE databaes.assignment6 SET email = '${email}', address = '${address}' WHERE id = ${id}`;
    
    db.query(q, (err, result) => {
        if (err) {

            return res.status(500).json({ error: "Failed to update worker." });
        }
        
        return res.json({ message: "Worker information has been updated successfully." });
    });
});

// @desc Update worker
// @route PUT /assignment6/:id
/*
app.put("/assignment6/:id", (req, res) => {
    assignment6Email=req.body.email;
    assignment6Address=req.body.address;
    console.log(assignment6Email, assignment6Address);
    const id = req.params.id;
    const q = "UPDATE databaes.assignment6 SET `email` ="+assignment6Email+", `address` ="+assignment6Address+" WHERE id = "+id+" ;";
    //const q = "UPDATE assignment6 SET `email` = ?, `address` = ? WHERE id = ?;";
    const values = [
        req.body.email,
        req.body.address
    ]
    db.query(q, [...values,id], (err,data) => {
    //db.query(q, [id], (err,data) => {
        if(err) { //query either returns an error ...
            return res.json(err) 
        } else { //...or returns data selected from query q
            return res.json("Worker has been updated.")
        }
    })
})

*/

/* app running on port 8800 */
app.listen(port, () => console.log(`Server started on port ${port}`))
