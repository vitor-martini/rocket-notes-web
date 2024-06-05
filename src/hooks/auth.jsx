import { createContext, useContext } from "react";
import { api } from "../services/api"
import { useState, useEffect } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [userData, setUserData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data;

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      localStorage.setItem("@rocketnotes:token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUserData(user)

    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível autenticar")
      }
    }
  } 

  async function signOut() {
    localStorage.removeItem("@rocketnotes:user")
    localStorage.removeItem("@rocketnotes:token")
    setUserData({})
  }

  async function updateUser({ user }) {
    try {
      await api.put("/users", user);
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
      setUserData(user)
      alert("Atualizado com sucesso!")
    }
    catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Erro ao atualizar dados")
      }
    }
  }
  
  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token");
    const user = localStorage.getItem("@rocketnotes:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUserData(JSON.parse(user));
    }
  }, [])

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut, 
      updateUser,
      user: userData,
    }}
    >
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth }