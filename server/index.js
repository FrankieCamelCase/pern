const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json()); //req.body

app.listen(500, () => {
    console.log("Server has started on port 5000")
});

//route

//create todo
app.post("/todos", (req, res) => {
    try {
        console.log(req.body)
    } catch (err) {
        console.error(err.message);
    }

});
//get todo

//get all to do

//detlete todo