const express = require("express");
const aspirantesController = require("../controllers/aspirantes.controller");
const aspirantesRouter = express.Router();

aspirantesRouter.get("/aspirantes", aspirantesController.list);

module.exports = aspirantesRouter;
