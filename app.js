const connector = require("./db/connectDb");
const express = require("express");
const tasks = require("./routes/tasks");
const app = express();

// connector();

//middleware
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

connector()
  .then(() => {
    console.log("Successfully connected to the database");
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((err) => console.log(err));
