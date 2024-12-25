const mongoose = require("mongoose");

const LeaveSchema = new mongoose.Schema({
    profile: {
        type: String,
        required: true,
        default: "https://via.placeholder.com/40",
        validate: {
            validator: function (v) {
                return /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp|bmp)$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
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
    date: {
        type: Date,
        required: true,
        default: Date.now
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
        required: false,
        default: "https://via.placeholder.com/20",
        validate: {
            validator: function (v) {
                return /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp|bmp|pdf|doc|docx)$/.test(v);
            },
            message: props => `${props.value} is not a valid document URL!`
        }
    }
});

const Leave = mongoose.model("Leave", LeaveSchema);
module.exports = Leave;
