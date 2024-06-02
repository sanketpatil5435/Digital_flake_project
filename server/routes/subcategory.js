const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");

const {
  getAllSubCategories,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
} = require("../controllers/SubCategory");

router.get("/getAllSubCategories", auth, getAllSubCategories);
router.post("/createSubCategory", auth, createSubCategory);
router.put("/updateSubCategory/:id", auth, updateSubCategory);
router.delete("/deleteSubCategory/:id", auth, deleteSubCategory);

module.exports = router;
