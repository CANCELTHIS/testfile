import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import passport from "passport";
import useRouter from "./routes/users/users.mjs";
import "./strategies/local-strategy.mjs";
import "./strategies/google-strategy.mjs";
import "dotenv/config";
import mongoose from "mongoose";
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
const port = process.env.PORT || 5000;
// Session configuration
mongoose
  .connect("mongodb://localhost/practice")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      collectionName: "sessions",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
    },
  })
);

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(useRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

export default app;
