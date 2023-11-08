const Banner = require("../models/banner");

exports.addBanner = async (req, res) => {
  try {
    const banner = await Banner.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        banner: banner,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateBanner = async(req, res) => {
    try{

    }catch(err){
        
    }
}

exports.getAllBanners = async (req, res) => {
  try {
    const banners = await Banner.find();
    res.status(200).json({
      status: "success",
      data: {
        banners: banners,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteBanner = async (req, res) => {
  try {
    const banner = await Banner.deleteOne({ _id: req.query.id });
    res.status(200).json({
      status: "success",
      data: {
        banner: banner,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
