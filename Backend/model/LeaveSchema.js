const mongoose = require("mongoose");

const LeaveSchema = new mongoose.Schema({
    profile: {
        type: String,
        required: true,
        default: "https://res.cloudinary.com/drxanllxs/image/upload/v1731160820/samples/smile.jpg",
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
        default: "Pending"
    },
    docs: {
        type: String,
        default: "-"
    }
});

const Leave = mongoose.model("Leave", LeaveSchema);
module.exports = Leave;
