const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path")
const profesionesRouter = require("./routes/profesiones.routes");
const aspirantesRouter = require("./routes/aspirantes.routes");

const app = express();

// ----------- Middlewares ---------------
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use(express.static(path.join(__dirname, "../public")));

// ------------ Routes ------------------
app.get("/", (req, res) => {
    res.json("Hola mundo");
});

app.use("/api", profesionesRouter);
app.use("/api", aspirantesRouter);

module.exports = app;
