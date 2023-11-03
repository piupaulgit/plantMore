const Category = require("../models/category");

exports.getCategoryById = async(req, res, next, id) => {
  try {
    const category = await Category.findById(id);
    req.category = category;
    next();
  } catch (err) {
    console.log(err);
  }
};

exports.addCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        category: newCategory,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(201).json({
      status: "success",
      data: {
        categories: categories,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteCategory = async (req, res) => {
  const category = req.category;
  try{
    await Category.deleteOne({ "_id" :  category._id});
    res.status(201).json({
      status: "success",
      message: "Deleted Successfully"
    });
  }catch(err){
    console.log(err)
  }
}

//
