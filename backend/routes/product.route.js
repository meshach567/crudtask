const express = require("express");
const { getProduct, getProducts, createProduct, updateProduct, deleteProduct } = require("../controller/product.controlle");
const router = express.Router();


router.get("/", getProduct)
router.get("/:id", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct)
