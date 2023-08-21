import express from "express";

const router = express.Router();

// LOGOUT
router.get("/", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log("User not logged out", err);
      return res.status(500).json(err);
    }
  });
  console.log("User logged out");
  return res.json({ message: "User logged out" });
});

export default router;
