const express = require("express"); 
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json()); //parses incoming data with JSON payload

//create listener on port 5k
app.listen(5000, () => {
    console.log("Server has started on port 5000")
});

//routes
//post a todo
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING * ", [description]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//get todo
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todoItem = await pool.query("SELECT * FROM todo WHERE id = $1", [id]);
        res.json(todoItem.rows[0])
    } catch (err) {
        console.log(err.message);
    }
});

//get all to do
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo ORDER BY id DESC");
        res.json(allTodos.rows);
    } catch (err) {
        console.log(err.message);
    }
});

//detlete todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const toDoDelete = await pool.query("DELETE FROM todo WHERE id = $1", [id]);
        res.json("Todo was deleted!");
    } catch (err) {
        console.log(err.message)
    }
});

//update a todo
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE id = $2", [description, id]);

        res.json("Todo was updated!");
    } catch (err) {
        console.error(err.message)
    }
});