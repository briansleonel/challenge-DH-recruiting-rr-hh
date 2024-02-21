const express = require("express");
const profesionesController = require("../controllers/profesiones.controller");
const profesionesRouter = express.Router();

profesionesRouter.get("/profesion", profesionesController.list);

module.exports = profesionesRouter;
