import { Router } from "express";

const router = Router();
// fetch all products
router.get("/api/products", (req, res) => {}); 
// fetch a single product
router.get("/api/products/:id", (req, res) => {}); 
 // create product
router.post("/api/products", (req, res) => {});
 // update product
router.put("/api/products/:id", (req, res) => {});
// delete product
router.delete("/api/products/:id", (req, res) => {}); 
// search/filter products
router.get("/api/products/search", (req, res) => {}); 
export default router;