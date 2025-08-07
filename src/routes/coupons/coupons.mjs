import { Router } from "express";

const router = Router();

router.get("/api/coupons", (req, res) => {}); // get coupons
router.post("/api/coupons", (req, res) => {}); // create coupon
router.post("/api/coupons/apply", (req, res) => {}); // apply coupon
router.delete("/api/coupons/:id", (req, res) => {}); // delete coupon
export default router;