import { login } from "../../services/auth/AuthService";
import { toast } from "react-toastify";

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
    showToastError(error.response.data.message);
  }
};

export default handleLogin;
