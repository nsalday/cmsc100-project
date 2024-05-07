const mongoose = require("mongoose");

await mongoose.connect("mongodb://localhost:27017/cmsc100-project");

const UserSchema = new mongoose.Schema({
    first_name: String,
    middle_name: { type: String, required: false },
    last_name: String,
    user_type: String,
    email: String,
    password: String
}, { collection: 'user_account' }); 
  
const User = mongoose.model("User", UserSchema);

module.exports = {
    User
};
