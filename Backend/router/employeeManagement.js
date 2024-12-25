const express = require("express");
const createController = require("../controller/createController");
const fetchController = require("../controller/fetchController");
const deleteController = require("../controller/deleteController");
const updateController = require("../controller/updateController");
const employee = require("../model/EmployeeSchema");
const upload = require("../storage/multer");

const router = express.Router();

router.post("/create/employee", createController(employee))

router.get("/fetch/employee", fetchController(employee));

router.patch("/update/employee/:id", updateController(employee));

router.delete("/delete/employee/:id", deleteController(employee));

module.exports = router;
