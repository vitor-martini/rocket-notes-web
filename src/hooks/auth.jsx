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
      api.defaults.headers.authorization = `Bearer ${token}`;

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
    api.defaults.headers.authorization = "";
    setUserData({})
  }
  
  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token");
    const user = localStorage.getItem("@rocketnotes:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setUserData(JSON.parse(user));
    }
  }, [])

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut, 
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