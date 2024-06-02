const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");

const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/Product");

router.get("/getAllProducts", auth, getAllProducts);
router.post("/createProduct", auth, createProduct);
router.put("/updateProduct/:id", auth, updateProduct);
router.delete("/deleteProduct/:id", auth, deleteProduct);

module.exports = router;
