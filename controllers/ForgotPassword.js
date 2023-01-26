const UserModal = require("../modals/UserSchema");
function ForgotPassword(req, res, next) {
  let email = req.body.email;
  if (!email) {
    return res.json({ error: "email not found" });
  }
  UserModal.findOne({ email }, (err, data) => {
    if (err) {
      return res.json({
        message: "not a valid user email, Enter your email again",
      });
    } else {
      return res.json({
        password: data.password,
        random_number: Math.floor(Math.random() * 100 + 1),
      });
    }
  });
}
module.exports = ForgotPassword;
