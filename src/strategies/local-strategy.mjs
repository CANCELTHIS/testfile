import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/userSchema.mjs";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email", // using email as the username field
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
          return done(null, false, { message: "Incorrect email or password" });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
          return done(null, false, { message: "Incorrect email or password" });
        }

        // Remove password before sending user object
        user.password = undefined;
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
