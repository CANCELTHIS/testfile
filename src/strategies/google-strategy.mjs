import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/userSchema.mjs";
import "dotenv/config";
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user already exists with this googleId
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // Check if user exists with the same email but no googleId
          user = await User.findOne({ email: profile.emails[0].value });

          if (user) {
            // Add googleId to existing user
            user.googleId = profile.id;
            await user.save();
          } else {
            // Create new user
            user = await User.create({
              googleId: profile.id,
              email: profile.emails[0].value,
              username: profile.emails[0].value.split("@")[0],
              profile: {
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                avatar: profile.photos[0].value,
              },
              isVerified: true,
            });
          }
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);
