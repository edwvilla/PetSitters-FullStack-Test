import API from "..";

const ping = async () =>
  await API.get("/").then((response) => {
    console.log(response);
  });

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

export { login, signup, ping };
