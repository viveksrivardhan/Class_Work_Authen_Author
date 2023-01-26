const express = require("express");
const productaddroute = express.Router();
const addpro = require("../controllers/ProductAdd");
productaddroute.post("/new", addpro);

const getproduct = require("../controllers/getProduct");
const Validator = require("../utils/Validator");
productaddroute.get("/getproduct", Validator, getproduct);
module.exports = productaddroute;
