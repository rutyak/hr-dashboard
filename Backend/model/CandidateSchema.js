const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        default: "Unknown"
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^\(\d{3}\) \d{3}-\d{4}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        default: "-"
    },
    position: {
        type: String,
        required: true,
        trim: true,
        default: "-"
    },
    status: {
        type: String,
        enum: ["New", "Interviewing", "Hired", "Rejected"],
        required: true,
        default: "New"
    },
    experience: {
        type: String,
        required: true,
        trim: true,
        default: "Fresher"
    },
    resume: {
        type: String,
        required: true,
        default: "-"
    }
});

const Candidate = mongoose.model("Candidate", CandidateSchema);
module.exports = Candidate;
