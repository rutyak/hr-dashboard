const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
    profile: {
        type: String,
        default: "https://via.placeholder.com/40"
    },
    name: {
        type: String,
        required: true,
        trim: true,
        default: "Unknown"
    },
    designation: {
        type: String,
        required: true,
        trim: true,
        default: "-"
    },
    department: {
        type: String,
        required: true,
        trim: true,
        default: "-"
    },
    task: {
        type: String,
        required: true,
        default: "-"
    },
    status: {
        type: String,
        required: true,
        default: "Absent"
    },
});

const Attendance = mongoose.model("Attendance", AttendanceSchema);
module.exports = Attendance;
