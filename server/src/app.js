const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const profesionesRouter = require("./routes/profesiones.routes");

const app = express();

// ----------- Middlewares ---------------
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// ------------ Routes ------------------
app.get("/", (req, res) => {
    res.json("Hola mundo");
});

app.use("/api", profesionesRouter);

module.exports = app;
