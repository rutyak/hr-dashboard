const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
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
    department: {
        type: String,
        required: true,
        trim: true,
        default: "-"
    },
    joiningDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
