const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todoSchema  = new Schema({
  todoName: {
    type : String,
    required: true
  },
  todoStatus: {
    type: String ,
    default: 0
  }
})

module.exports = Todo = mongoose.model('todoModel', todoSchema);