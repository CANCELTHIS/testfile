import { Router } from "express";
const router = Router();
router.post("/api/products/:id/reviews", (req, res) => {}); // add review
router.get("/api/products/:id/reviews", (req, res) => {}); // get reviews
router.put("/api/reviews/:id", (req, res) => {}); // edit review
router.delete("/api/reviews/:id", (req, res) => {}); // delete review
export default router;