const express = require("express");
const {
  addTransition,
  getAllTransition,
} = require("../controllers/transitionController");
//router object
const Router = express.Router();

Router.post("/add-transition", addTransition);
Router.post("/get-transition", getAllTransition);

module.exports = Router;
