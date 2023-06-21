import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const enviarDatos = async (e) => {
    e.preventDefault();
    console.log("enviando datos..." + email + password);
    const data = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:3001/user/login",
        data,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          credentials: "include",
        }
      );
      const token = Cookies.get("token");
      console.log(response.headers);
      console.log(token);
      if (token) {
        Cookies.set("token", token);
        navigate("/category/movies");
      }

      console.log("Respuesta:", response.data);
    } catch (error) {
      console.error("Error:", error.response.data);
      // Mostrar mensaje de error al usuario
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold m-16">
        Complete el formulario para iniciar sesion
      </h1>
      <form className="flex flex-col w-1/2 mx-auto" onSubmit={enviarDatos}>
        <label className="text-xl font-bold m-2">Email</label>
        <input
          className="border-2 border-gray-300 rounded-md m-2"
          type="text"
          placeholder="Nombre de usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-xl font-bold m-2">Contraseña</label>
        <div className="relative">
          <input
            className="border-2 border-gray-300 rounded-md pl-2 py-2 m-2"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute top-2 right-2 bg-transparent border-none p-2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          </button>
        </div>
        <button
          className={`text-white font-bold m-2 p-2 rounded-md  ${
            email !== "" && password !== ""
              ? "bg-red-600 cursor-pointer hover:bg-red-700"
              : "bg-red-400 cursor-not-allowed"
          }`}
          type="submit"
          disabled={email !== "" && password !== "" ? false : true}
        >
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
