const express = require("express");
const router = express.Router();
const controllermodel = require("../model/ControllerModel");
const CounterController = require("../controllers/CounterController");

router.post("/", CounterController.addvalue);
router.get("/:id", CounterController.getvaluebyid);
router.put("/:id", CounterController.updatevalue);

module.exports = router;
