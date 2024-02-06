const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// ----------- Middlewares ---------------
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// ------------ Routes ------------------
app.get("/", (req, res) => {
    res.json("Hola mundo");
});

module.exports = app;
