const mongoose = require("mongoose");
const URI = process.env.DB_URI;
 function connectDB() {
  try {
     mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MONGODB connected"); 
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB;

