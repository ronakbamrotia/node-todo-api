const express = require("express");
const router = express.Router();
const Todo = require("../models/todoSchema");

//@route GET /api/todos/test
//desc ADDING TODO
//@access public route
router.get("/test", (req, res) => {
  res.json({
    msg: "working todoooo"
  });
});

//@route POST  /api/todos/addtodo
//desc ADD TODO
//@access public route
router.post("/addtodo", (req, res) => {
  const todo = new Todo({
    todoName: req.body.todoName
  });
  todo.save().then(todo => res.json(todo));
  // res.json(JSON.stringify(req));
});

//@route GET  /api/todos/getTodos
//desc GET TODOS
//@access public route
router.get("/gettodos", (req, res) => {
  Todo.find({}, function(err, todos) {
    res.json(todos);
  });
});

//@route DELETE /api/todos/deletetodo
//desc DELETE TODO
//@access public route
router.post("/deletetodo", (req, res) => {
  Todo.deleteOne({ _id: req.body.id }, function(err) {
    res.json("Todo Deleted");
  });
});

//@route UPDATE /api/todos/updatetodo
//desc UPDATE TODO
//@access public route
router.patch("/updatetodo", (req, res) => {
  const query = {
    _id: req.body.id
  };
  Todo.findOneAndUpdate(
    query,
    { todoStatus: req.body.todoStatus },
    { new: true },
    (error, doc) => {
      res.json(doc);
    }
  );
});

module.exports = router;
