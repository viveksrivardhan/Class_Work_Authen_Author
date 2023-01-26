const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const products = new Schema({
  name: String,
  total_qnty: Number,
  company: String,
  price_per_piece: Number,
});

const ProductsModel = mongoose.model("sample_products", products);

module.exports = ProductsModel;
