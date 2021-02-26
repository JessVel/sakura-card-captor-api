const express = require("express");

const connectDB = require("./config/db");

const cors = require("cors");

require("dotenv").config();

const { success } = require("consola");

const app = express();

connectDB();

app.use(cors());

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use("/api/card", require("./routes/card_routes"));

app.listen(PORT, () => {
  success({
    badge: true,
    message: `Server running in ${PORT}`,
  });
});
