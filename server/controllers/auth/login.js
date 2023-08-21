import passportConfig from "./passport_config.js";
import User from "../../models/user/index.js";
import passport from "passport";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const jwtSecret = "secret";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if user exists based in the email
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(401).json({ message: "email incorrecto." });
    }

    // check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "contraseña incorrecta." });
    }

    const accessToken = jwt.sign(
      { id: user.id, email: user.email },
      jwtSecret,
      {
        expiresIn: "1d",
      }
    );

    return res.json({
      token: accessToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        address: user.address,
        phone: user.phone,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al iniciar sesión",
    });
  }
};

export default login;
