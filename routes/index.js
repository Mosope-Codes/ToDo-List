const router = require("express").Router()
const Todo = require("../models/Todo")

//routes will be here...
router.get("/", async(req, res) => {
    const allTodo = await Todo.find();
    res.render("index", {todo: allTodo})
})

//detete todo route
router.get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Todo Successfully!")
        res.redirect("/");
      })
      .catch((err) => console.log(err));
});


//update a todo route
router.get("/update/todo/:_id", (req, res) => {
  const { _id } = req.params;
  Todo.find({}, (err, todo) => {
    res.render("edit.ejs", { todo: todo, _id: _id })
  });
})
router.post("/update/todo/:_id", (req, res) => {
  const { _id } = req.params;
  Todo.findByIdAndUpdate(_id, { todo: req.body.todo}, err =>{
    if(err) return res.send(500, err);
    res.redirect("/");
  })
})




module.exports = router;