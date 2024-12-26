const mongoose = require("mongoose");

const LeaveSchema = new mongoose.Schema({
    profile: {
        type: String,
        required: true,
        default: "https://via.placeholder.com/40",
    },
    name: {
        type: String,
        required: true,
        trim: true,
        default: "Unknown"
    },
    date:{
        type: String,
        default: "-"
    },
    reason: {
        type: String,
        required: true,
        trim: true,
        default: "-"
    },
    status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        required: true,
        default: "Pending"
    },
    docs: {
        type: String,
        default: "-"
    }
});

const Leave = mongoose.model("Leave", LeaveSchema);
module.exports = Leave;
