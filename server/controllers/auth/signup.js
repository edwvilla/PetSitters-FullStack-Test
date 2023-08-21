import User from "../../models/user/index.js";
import bcrypt from "bcrypt";

// SIGNUP
const signUp = async (req, res) => {
  // check if all fields are filled
  if (
    !req.body.name ||
    !req.body.lastname ||
    !req.body.address ||
    !req.body.email ||
    !req.body.phone ||
    !req.body.password
  ) {
    return res
      .status(500)
      .json({ message: "favor de llenar todos los campos" });
  }

  // check if email already exists
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) {
    return res.status(500).json({ message: "email ya registrado." });
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const newUser = await User.create(
    {
      name: req.body.name,
      lastname: req.body.lastname,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
    },
    (err, user) => {
      if (err) {
        return res.status(500).json({ message: "no registrado." });
      }
      return res.json(user);
    }
  );

  return res.json({
    ...newUser.toJSON(),
    password: undefined,
  });
};

export default signUp;
