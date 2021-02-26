const express = require("express");

const connectDB = require("./config/db");

const cors = require("cors");

require("dotenv").config();

const { success } = require("consola");

const app = express();

connectDB();

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.options("*", cors());

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With, Accept");
  next();
});

app.use("/api/card", require("./routes/card_routes"));

app.listen(PORT, () => {
  success({
    badge: true,
    message: `Server running in ${PORT}`,
  });
});
