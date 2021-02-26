const mongoose = require("mongoose");
const { success, error } = require("consola");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    success({
      badge: true,
      message: `Data Base Connected`,
    });
  } catch (err) {
    error({
      badge: true,
      message: `Error: ${err.message}`,
    });
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
