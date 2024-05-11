const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    },
    person: {
        type: String,
    }
}, { timestamps: true })

const TodoModel = mongoose.model("todos", TodoSchema)

module.exports = TodoModel