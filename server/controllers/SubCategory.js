const SubCategory = require("../models/SubCategory");

exports.getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find({ user: req.user.id });
    res.json(subCategories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSubCategory = async (req, res) => {
  const subCategory = new SubCategory({
    name: req.body.name,
    image: req.body.image,
    // status: req.body.status,
    category: req.body.category,
    user: req.user.id,
  });

  try {
    const newSubCategory = await subCategory.save();
    res.status(201).json(newSubCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateSubCategory = async (req, res) => {
  const { name, image, status, category } = req.body;

  try {
    const subCategory = await SubCategory.findById(req.params.id);
    if (!subCategory)
      return res.status(404).json({ message: "SubCategory not found" });

    if (subCategory.user.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    subCategory.name = name || subCategory.name;
    subCategory.image = image || subCategory.image;
    subCategory.status = status || subCategory.status;
    subCategory.category = category || subCategory.category;

    const updatedSubCategory = await subCategory.save();
    res.json(updatedSubCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id);
    if (!subCategory) {
      return res.status(404).json({ message: "SubCategory not found" });
    }

    if (subCategory.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await SubCategory.findByIdAndDelete(req.params.id);
    res.json({ message: "SubCategory deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
