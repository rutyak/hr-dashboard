const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
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
    },
    phone: {
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
    },
    declaration:{
        type: Boolean,
        require: true
    }
});

const Candidate = mongoose.model("Candidate", CandidateSchema);
module.exports = Candidate;
