import { useAuth } from "hooks/useAuth";
import {  Navigate } from "react-router-dom";


export const PrivateRoute = ({ component: Component, redirectTo = '/HomeView' }) => {
    const { isLoggedIn, isRefreshing } = useAuth();
  
    const shouldRedirect = !isLoggedIn && !isRefreshing;
  
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  }