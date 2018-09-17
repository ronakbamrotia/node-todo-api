const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const todos = require("./routes/todo");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// app.use((req, res) => {

// });

//connecting to db
app.use("/api/todos", todos);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
