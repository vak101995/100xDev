const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:DVyAwnokv9kOXNNM@cluster0.ywp32xa.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
}

//db url: mongodb+srv://admin:DVyAwnokv9kOXNNM@cluster0.ywp32xa.mongodb.net/