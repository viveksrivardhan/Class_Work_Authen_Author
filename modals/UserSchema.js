const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserInfo = new Schema({
  username: String,
  email: String,
  password: String,
  encyptedpassword: String,
});
const UserModal = mongoose.model("UserInfo-classwork", UserInfo);
module.exports = UserModal;