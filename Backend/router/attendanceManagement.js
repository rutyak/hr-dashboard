const express = require("express");
const createController = require("../controller/createController");
const fetchController = require("../controller/fetchController");
const deleteController = require("../controller/deleteController");
const updateController = require("../controller/updateController");
const attendance = require("../model/AttendanceSchema");
const upload = require("../storage/multer");

const router = express.Router();

router.post("/create/attendance",upload.single("photo"), createController(attendance));

router.get("/fetch/attendance", fetchController(attendance));

router.put("/update/attendance/:id", updateController(attendance));

router.delete("/delete/attendance/:id", deleteController(attendance));

module.exports = router;
