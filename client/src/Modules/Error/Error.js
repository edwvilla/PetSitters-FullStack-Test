import React from "react";
import { useRouteError } from "react-router-dom";

// error message to spanish
const errorToSpanish = (string) => {
  if (string.includes("No route matches")) {
    return "No se encontró la página";
  }

  switch (string) {
    case "Failed to fetch":
      return "No se pudo conectar con el servidor";
    case "Not Found":
      return "No se encontró la página";
    default:
      return string;
  }
};

export default function Error() {
  const { error } = useRouteError();

  const errorMessages = errorToSpanish(error.message || error.statusText);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Disculpa, ah ocurrido un error.</p>
      <p>
        <i>{errorMessages}</i>
      </p>
    </div>
  );
}
