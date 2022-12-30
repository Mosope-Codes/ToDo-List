const router = require("express").Router()
const Todo = require("../models/Todo")

//routes will be here...
router.post("/add/todo", (req, res) => {
    const {todo} = req.body;
    const newTodo = new Todo({todo})

    //save the todo
    newTodo.save()
    .then(() => {
        console.log("You have Successfully added your Todo!")
        res.redirect("/")
    })
    .catch((err) => console.log(err)); 
})

module.exports = router;