import { Router } from "express";

const router = Router();

router.get("/api/cart", (req, res) => {}); // get cart
router.post("/api/cart", (req, res) => {}); // add item to cart
router.put("/api/cart/:itemId", (req, res) => {}); // update item quantity
router.delete("/api/cart/:itemId", (req, res) => {}); // remove item
router.delete("/api/cart", (req, res) => {}); // clear cart
export default router;