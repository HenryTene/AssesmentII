const express = require("express");

const expressConfig = require("./config/express");
const connectDB = require("./config/database");
const routes = require("./routes");

const app = express();

expressConfig(app);
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  //connect to mongoDB
  connectDB();
  //Routes
  routes(app);
});

module.exports = app;
