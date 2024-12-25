const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
    profile: {
        type: String,
        required: true,
        default: "https://via.placeholder.com/40"
    },
    name: {
        type: String,
        required: true,
        trim: true,
        default: "Unknown"
    },
    id: {
        type: String,
        required: true,
        unique: true
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
        enum: ['Work from home', 'Present', 'On Leave', 'Absent'],
        required: true,
        default: "Absent"
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    attendance: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    remarks: {
        type: String,
        required: true,
        trim: true,
        default: "-"
    },
    address: {
        type: String,
        required: true,
        default: "-"
    }
});

const Attendance = mongoose.model("Attendance", AttendanceSchema);
module.exports = Attendance;
