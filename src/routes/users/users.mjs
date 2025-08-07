import { Router } from "express";

const router = Router();

router.post("/api/auth/register", (req, res) => {}); // register
router.post("/api/auth/login", (req, res) => {}); // login
router.post("/api/auth/logout", (req, res) => {}); // logout
router.get("/api/users/me", (req, res) => {}); // get current user
router.put("/api/users/me", (req, res) => {}); // update user profile
router.put("/api/users/password", (req, res) => {}); // change password
router.get("/api/users/:id", (req, res) => {}); // get user by ID
router.delete("/api/users/:id", (req, res) => {}); // delete user
export default router;