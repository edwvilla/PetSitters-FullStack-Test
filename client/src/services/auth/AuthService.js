import API from "..";

const login = ({ email, password }) =>
  API.post("/auth/login", { email, password });

const signup = async ({ name, lastName, Address, email, Phone, password }) =>
  await API.post("/auth/signup", {
    name: name,
    lastname: lastName,
    address: Address,
    email: email,
    phone: Phone,
    password: password,
  });

const logout = async () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};

export { login, signup, logout };
