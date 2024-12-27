const express = require("express");
const createController = require("../controller/createController");
const fetchController = require("../controller/fetchController");
const deleteController = require("../controller/deleteController");
const updateController = require("../controller/updateController");
const leaves = require("../model/LeaveSchema");
const upload = require("../storage/multer");

const router = express.Router();

router.post("/create/leaves", upload.single("files"), createController(leaves));

router.get("/fetch/leaves", fetchController(leaves));

router.patch("/update/leaves/:id", upload.single("files"), updateController(leaves));

router.delete("/delete/leaves/:id", deleteController(leaves));

module.exports = router;