import { Router } from "express";

const router = Router();

router.get("/api/orders", (req, res) => {}); // get all orders
router.get("/api/orders/:id", (req, res) => {}); // get single order
router.post("/api/orders", (req, res) => {}); // create order
router.put("/api/orders/:id/status", (req, res) => {}); // update status
router.delete("/api/orders/:id", (req, res) => {}); // cancel order
export default router;