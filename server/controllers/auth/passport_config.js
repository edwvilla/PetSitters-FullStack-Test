import passport from "passport";
import LocalStrategy from "passport-local";
import bcrypt from "bcrypt";

import User from "../../models/user/index.js";

const authenticateUser = async (email, password, done) => {
  const user = await User.findOne({ where: { email: email } });
  if (!user) {
    return done(null, false, { message: "email incorrecto." });
  }

  try {
    if (await bcrypt.compare(password, user.password)) {
      return done(null, user);
    } else {
      return done(null, false, { message: "contraseña incorrecta." });
    }
  } catch (error) {
    return done(error);
  }
};

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    authenticateUser
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findByPk(id);
  done(null, user);
});

export default passport;
