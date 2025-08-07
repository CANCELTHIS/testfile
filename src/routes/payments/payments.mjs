import { Router } from "express";

const router = Router();
router.post("/api/payments", (req, res) => {}); // initiate payment
router.get("/api/payments/status/:orderId", (req, res) => {}); // check status
router.post("/api/webhooks/payment", (req, res) => {}); // payment webhook
export default router;