const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullname:{
        type: String
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;