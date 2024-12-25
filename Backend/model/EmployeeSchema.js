const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
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
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        default: "-"
    },
    position: {
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
    joiningDate: {
        type: String,
        required: true,
    }
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
