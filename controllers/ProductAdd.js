const ProductModel = require("../modals/ProductSchema");
function addpro(req, res) {
  let name = req.body.name;
  let total_qnty = req.body.total_qnty;
  let company = req.body.company;
  let price_per_piece = req.body.price_per_piece;
  let productData = {
    name: name,
    total_qnty: total_qnty,
    company: company,
    price_per_piece: price_per_piece,
  };
  let product = new ProductModel(productData);
  product
    .save()
    .then((item) => {
      return res.json({
        message: "Item added Successful",
        data: item,
      });
    })
    .catch((err) => {
      return res.json({
        message: "Add to db Failed",
      });
    });
}

module.exports = addpro;
