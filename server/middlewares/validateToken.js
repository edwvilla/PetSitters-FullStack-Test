import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/config.js";

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  if (!accessToken) {
    return res.status(401).json({ message: "User not authenticated" });
  }
  try {
    const validToken = jwt.verify(accessToken, jwtSecret);
    req.user = validToken;
    if (validToken) {
      return next();
    }
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

export default validateToken;
