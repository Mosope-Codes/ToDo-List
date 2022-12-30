const router = require("express").Router()
const Todo = require("../models/Todo")

//routes will be here...
router.get("/", async(req, res) => {
    const allTodo = await Todo.find();
    res.render("index", {todo: allTodo})
})

.get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Todo Successfully!")
        res.redirect("/");
      })
      .catch((err) => console.log(err));
});





module.exports = router;