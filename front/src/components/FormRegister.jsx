import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegister } from "../store/user";
import { Toaster, toast } from "react-hot-toast";

const FormRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // aca peticion
  const enviarDatos = (e) => {
    e.preventDefault();
    dispatch(userRegister({ username, email, password }));
    navigate("/user/login");
    toast.success("Usuario creado con exito");
  };

  const msjPassword = () => {
    if (password.length < 4) {
      return (
        <span className="text-white bg-red-500 font-bold w-full">
          La contraseña debe ser mayor a 4 y menor a 20 caracteres.
        </span>
      );
    } else {
      return (
        <span className="text-white bg-[#90cea1] font-bold w-full ">
          Contraseña valida.
        </span>
      );
    }
  };

  return (
    <div className="h-[740px]">
      <h1 className="text-2xl font-bold m-16">
        Complete el formulario para Registrarse
      </h1>
      <form className="flex flex-col w-1/2 mx-auto" onSubmit={enviarDatos}>
        <label className="text-xl font-bold m-2">User name</label>
        <input
          className="border-2 border-gray-300 rounded-md m-2"
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="text-xl font-bold m-2">Email</label>
        <input
          className="border-2 border-gray-300 rounded-md m-2"
          type="email"
          placeholder="email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-xl font-bold m-2">Contraseña</label>
        {msjPassword()}
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
            username !== "" && email !== "" && password !== ""
              ? "bg-red-600 cursor-pointer hover:bg-red-700"
              : "bg-red-400 cursor-not-allowed"
          }`}
          type="submit"
          disabled={
            username !== "" && email !== "" && password !== "" ? false : true
          }
        >
          Registrarse
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default FormRegister;
