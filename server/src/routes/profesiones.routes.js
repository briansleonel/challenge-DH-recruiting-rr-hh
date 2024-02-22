const express = require("express");
const profesionesController = require("../controllers/profesiones.controller");
const profesionesRouter = express.Router();

profesionesRouter.get("/profesiones", profesionesController.list);

module.exports = profesionesRouter;
