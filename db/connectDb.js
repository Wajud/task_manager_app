const mongoose = require("mongoose");
require("dotenv").config();
const connectionString = process.env.MONGODB_URI;

const connector = () => {
  return mongoose.connect(
    connectionString
    //   , {
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    //   useUnifiedTopology: true,
    // }
  );
};

module.exports = connector;
