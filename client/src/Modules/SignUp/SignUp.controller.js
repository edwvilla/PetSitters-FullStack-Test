import { login, signup } from "../../services/auth/AuthService";
import { toast } from "react-toastify";

const showToastSignedUp = () => {
  toast.success("Cuenta creada con éxito");
};
const showToastError = (message) => {
  toast.error("Error al crear la cuenta, " + message);
};
const handleSignUp = async (event) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  if (data.get("password") !== data.get("password2")) {
    showToastError("Las contraseñas no coinciden");
    return;
  }
  if (data.get("password").length < 8) {
    showToastError("La contraseña debe tener al menos 8 caracteres");
    return;
  }

  try {
    await signup({
      name: data.get("firstName"),
      lastName: data.get("lastName"),
      Address: data.get("Address"),
      Phone: data.get("Phone"),
      email: data.get("email"),
      password: data.get("password"),
    });

    showToastSignedUp();
    return await login({
      email: data.get("email"),
      password: data.get("password"),
    });
  } catch (error) {
    showToastError(error.response.data.message);
  }
};

export default handleSignUp;
