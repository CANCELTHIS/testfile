import { Router } from "express";

const router = Router();

router.get("/api/categories", (req, res) => {}); // fetch all categories
router.post("/api/categories", (req, res) => {}); // create category
router.put("/api/categories/:id", (req, res) => {}); // update category
router.delete("/api/categories/:id", (req, res) => {}); // delete category
export default router;