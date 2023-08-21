const checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  console.log("User not authenticated");
  return res.status(401).json({ message: "User not authenticated" });
};

const checkNotAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log("User authenticated");
    return res.status(401).json({ message: "User authenticated" });
  }
  return next();
};

export { checkAuthentication, checkNotAuthentication };
