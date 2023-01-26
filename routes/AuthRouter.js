const express = require("express");
const AuthRouter = express.Router();

const RegisterUser = require("../controllers/RegisterUser");
const LoginUser = require("../controllers/LoginUser");
const getUser = require("../controllers/getUser");
const Validator = require("../utils/Validator");
const ForgotPassword = require("../controllers/ForgotPassword");

AuthRouter.post("/signup", RegisterUser);
AuthRouter.post("/login", LoginUser);

//validator function, check whether it is authorized user or not
//authorized route
//middleware: Validator, private or proctected route
AuthRouter.get("/user", Validator, getUser);
AuthRouter.get("/forgotpass", Validator, ForgotPassword);
module.exports = AuthRouter;
