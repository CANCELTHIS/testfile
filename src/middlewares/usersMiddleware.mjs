export const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized" });
};

export const ensureAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "admin") {
    return next();
  }
  res.status(403).json({ message: "Forbidden: Admin access required" });
};

export const ensureSelfOrAdmin = (req, res, next) => {
  if (
    req.isAuthenticated() &&
    (req.user.id === req.params.id || req.user.role === "admin")
  ) {
    return next();
  }
  res.status(403).json({ message: "Forbidden: Access denied" });
};

export const passportAuthenticate = (strategy, options = {}) => {
  return (req, res, next) => {
    passport.authenticate(strategy, options, (err, user, info) => {
      if (err) return next(err);
      if (!user) {
        return res
          .status(401)
          .json({ message: info?.message || "Authentication failed" });
      }
      req.logIn(user, (err) => {
        if (err) return next(err);
        next();
      });
    })(req, res, next);
  };
};
