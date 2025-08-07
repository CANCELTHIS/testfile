import { Router } from "express";
import passport from "passport";
import {
  validateRegister,
  validateLogin,
  validateUpdateProfile,
  validateChangePassword,
  validateIdParam,
} from "../../validations/validationSchema.mjs";
import {
  ensureAuthenticated,
  ensureAdmin,
} from "../../middlewares/usersMiddleware.mjs";
import { hashPassword } from "../../utils/helpers.mjs";
import User from "../../models/userSchema.mjs";
const router = Router();

// Auth Routes
router.post("/api/auth/register", validateRegister, async (req, res, next) => {
  try {
    const hashedPassword = await hashPassword(req.body.password);
    // Here you would create the user in DB
    const user = await User.create({ ...req.body, password: hashedPassword });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/api/auth/login",
  validateLogin,
  passport.authenticate("local", {
    failureRedirect: "/api/auth/login-failed",
    session: true,
  }),
  (req, res) => {
    res.json({ message: "Logged in successfully", user: req.user });
  }
);

router.get("/api/auth/login-failed", (req, res) => {
  res.status(401).json({ message: "Login failed" });
});

router.post("/api/auth/logout", ensureAuthenticated, (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.json({ message: "Logged out successfully" });
  });
});

// User Routes
router.get("/api/users/me", ensureAuthenticated, (req, res) => {
  res.json(req.user);
});

router.put(
  "/api/users/me",
  ensureAuthenticated,
  validateUpdateProfile,
  async (req, res, next) => {
    try {
      // Update user profile logic here
      res.json({ message: "Profile updated successfully" });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/api/users/password",
  ensureAuthenticated,
  validateChangePassword,
  async (req, res, next) => {
    try {
      // Password change logic here
      res.json({ message: "Password changed successfully" });
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/api/users/:id",
  ensureAuthenticated,
  validateIdParam,
  async (req, res, next) => {
    try {
      // Get user by ID logic here
      res.json({ user: {} });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/api/users/:id",
  ensureAuthenticated,
  ensureAdmin,
  validateIdParam,
  async (req, res, next) => {
    try {
      // Delete user logic here
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
