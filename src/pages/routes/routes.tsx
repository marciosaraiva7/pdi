import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//hooks
import useDecoder from "../../hooks/useDecoder";
//Default Pages
import Login from "../login";
import Register from "../register";

//Auth Pages
import Dashboard from "../dashboard";
import Profile from "../profile";
import Header from "../../components/header/header";

interface RouteProps {
  children: any;
  redirectTo: any;
}

const Router = () => {
  const isLogged = window.localStorage.getItem("token");


  const PrivateRoute = ({ children, redirectTo }: RouteProps) => {
    return isLogged ? children : <Navigate to={redirectTo} />;
  };
  const PublicRoute = ({ children, redirectTo }: RouteProps) => {
    return !isLogged ? children : <Navigate to={redirectTo} />;
  };

  //Public Routes
  const LoginPage = (
    <PublicRoute redirectTo="/home">
      <Login />
    </PublicRoute>
  );
  const RegisterPage = (
    <PublicRoute redirectTo="/home">
      <Register />
    </PublicRoute>
  );

  //Private Routes
  const HomePage = (
    <PrivateRoute redirectTo="/">
      <Header />
      <Dashboard />
    </PrivateRoute>
  );
  const ProfilePage = (
    <PrivateRoute redirectTo="/">
      <Header />
      <Profile />
    </PrivateRoute>
  );

  return (
    <BrowserRouter>
      <Routes>
        {/* Default Routes */}
        <Route path="/register" element={RegisterPage} />
        <Route path="/" index element={LoginPage} />
        {/* Private Routes */}
        <Route path="/home" index element={HomePage} />
        <Route path="/profile" element={ProfilePage} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
