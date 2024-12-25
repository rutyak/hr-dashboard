const express = require("express");
const createController = require("../controller/createController");
const fetchController = require("../controller/fetchController");
const deleteController = require("../controller/deleteController");
const updateController = require("../controller/updateController");
const candidate = require("../model/CandidateSchema");

const router = express.Router();

router.post("/create/candidate", createController(candidate));

router.get("/fetch/candidate", fetchController(candidate));

router.put("/update/candidate/:id",updateController(candidate));

router.delete("/delete/candidate/:id",deleteController(candidate));

module.exports = router;
