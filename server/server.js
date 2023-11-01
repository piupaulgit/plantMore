require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// routes
const authRoutes = require("./routes/auth");

// db connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("BD connected");
  })
  .catch((err) => {
    console.log(err);
  });

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// port
const port = process.env.PORT || 8000;

// my routes
app.use("/api/auth", authRoutes);

// starting server
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
