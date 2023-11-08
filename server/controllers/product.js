const Product = require("../models/product");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.getProductById = async (req, res, next, id) => {
  try {
    const product = await Product.findById(id);
    req.product = product;
    next();
  } catch (err) {
    console.log(err);
  }
};

exports.getProduct = (req, res) => {
  req.product.photo = undefined;
  res.status(200).json({
    status: "success",
    data: {
      product: req.product,
    },
  });
}

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
    if (!name || !category || !price || !stock) {
      return res.status(400).json({
        error: "Please fill all the inputs",
      });
    }

    const obg = {
      name: name[0],
      category: category[0],
      price: price[0],
      stock: stock[0],
    };

    let product = await Product.create(obg);

    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big",
        });
      }

      product.photo.data = fs.readFileSync(file.photo[0].filepath);
      product.photo.contentType = file.photo[0].mimetype;
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

exports.updateProduct = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, async (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "something wrong with file",
      });
    }

    let obj = {};
    Object.keys(fields).forEach(el => {
      obj[el] = fields[el][0]
    })

    let product = req.product;
    product = _.extend(product, obj);

    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big",
        });
      }

      product.photo.data = fs.readFileSync(file.photo[0].filepath);
      product.photo.contentType = file.photo[0].mimetype;
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

exports.deleteProduct = async(req, res) => {
  let product = req.product;
  try{
    await Product.deleteOne({ "_id" :  product._id});
    res.status(201).json({
      status: "success",
      message: "Product Deleted Successfully"
    });
  }catch(err){
    console.log(err)
  }
};