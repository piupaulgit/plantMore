const Product = require("../models/product");
const formidable = require("formidable");
const fs = require("fs");

exports.getAllProducts = async (req, res) => {
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

exports.addProduct = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, async (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "something wrong with file",
      });
    }

    const { name, category, price, stock } = fields;
    console.log(name, category,'ppppppppppp')
    if (!name || !category || !price || !stock) {
      return res.status(400).json({
        error: "Please fill all the inputs",
      });
    }

    let product = await Product.create(fields);

    if (file.photo) {
        if (file.photo.size > 3000000) {
          return res.status(400).json({
            error: "File size too big",
          });
        }
        product.photo.data = fs.readFileSync(file.photo.path);
        product.photo.contentType = file.photo.type;
      }

      try {
        const savedProduct = await product.save(); 
        res.json(savedProduct);
      } catch (err) {
        return res.status(400).json({
          error: err.message, 
        });
      }
  });
};
