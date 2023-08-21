import { login } from "../../services/auth/AuthService";
import { toast } from "react-toastify";
import router from "../index.js";

const showToastLoggedin = () => {
  toast.success("Inicio de sesión exitoso");
};
const showToastError = (message) => {
  toast.error("Error al iniciar sesión, " + message);
};
const handleLogin = async (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  try {
    return await login({
      email: data.get("email"),
      password: data.get("password"),
    });
  } catch (error) {
    console.log(error);
    showToastError(error.response.data.message);
  }
};

export default handleLogin;
