const mongoose = require("mongoose");

mongoose.connect(process.env.URI, {
  // useNewUrlParser: true,
  // useCreateIndex: true,
})

mongoose.connection.on("error", err => console.log("Connect to mongodb failed: " + err))
