const connector = require("./db/connectDb");
const express = require("express");
const tasks = require("./routes/tasks");
const cors = require("cors");

const app = express();

// connector();

//middleware
// app.use(cors());
app.use(express.static("public"));
app.use(express.json());

//static files middleware

//routes
app.use("/api/v1/tasks", tasks);

const port = 5000;

connector()
  .then(() => {
    console.log("Successfully connected to the database");
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((err) => console.log(err));
