import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { toast } from "react-toastify";

export const AuthContext = createContext();

function getUser() { // La Mamada
  const info = localStorage.getItem("Apptivity");
  if (info) return { name: "MrCano369" };
  return null;
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(getUser());

  const { post } = useFetch();

  const login = async (userCredencials) => {
    const res = await post(
      "https://apptivity.herokuapp.com/api/login",
      userCredencials
    );

    if (res.err) return toast.error(res.err);
    
    localStorage.setItem("Apptivity", res.token);
    setUser(userCredencials);
  };

  const register = async (userCredencials) => {
    const res = await post(
      "https://apptivity.herokuapp.com/api/register",
      userCredencials
    );

    if (res.err) return toast.error(res.err);
    localStorage.setItem("Apptivity", res.token);
    toast.success("Registro exitoso");

    setUser(userCredencials);
  };

  const logout = () => {
    localStorage.removeItem("Apptivity");
    setUser(null);
  };

  const isLogged = () => !!user;

  const contextValue = {
    user,
    login,
    register,
    logout,
    isLogged,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
