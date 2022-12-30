const express = require("express")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3030

const app = express()
mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://mosope-owolabi:vijodebe@cluster0.ztygibj.mongodb.net/todo-list?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("Connection Successful")
    }
})

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


//routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))

//server configuration
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`))

