const Product = require("../models/product");
const formidable = require("formidable");


exports.getAllProducts = async(req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json({
      status: "success",
      data: {
        products: products,
      },
    });
  } catch (err) {}
};

exports.addProduct = async(req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if (err) {
          return res.status(400).json({
            error: "something wrong with file",
          });
        }

        const { name, category, price, stoke } = fields;
        if (!name || !category || !price || !stoke) {
            return res.status(400).json({
              error: "Please fill all the inputs",
            });
          }
    });
};
