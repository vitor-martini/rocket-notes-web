import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user } = useAuth();
  const isUserLoggedIn = Object.keys(user).length > 0;

  return (
    <BrowserRouter>
      {isUserLoggedIn ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}
