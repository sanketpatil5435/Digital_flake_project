const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");

const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/Category");

router.get("/getAllCategories", auth, getAllCategories);
router.get("/getCategoryById/:id", auth, getCategoryById);
router.post("/createCategory", auth, createCategory);
router.put("/updateCategory/:id", auth, updateCategory);
router.delete("/deleteCategory/:id", auth, deleteCategory);

module.exports = router;
