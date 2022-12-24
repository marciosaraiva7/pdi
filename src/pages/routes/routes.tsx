
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
//Default Pages
import Login from "../login";

//Auth Pages
import Dashboard from "../dashboard";
import Profile from "../profile";
interface RouteProps {
 children: any,
 redirectTo: any,
}

const Router = () => {

 const isLogged = window.localStorage.getItem("token");

 const PrivateRoute = ({ children, redirectTo }: RouteProps) => {
  return isLogged ? children : <Navigate to={redirectTo} />
 }
 const PublicRoute = ({ children, redirectTo }: RouteProps) => {
  return !isLogged ? children : <Navigate to={redirectTo} />
 }

 //Default Routes
 const LoginPage = <PublicRoute redirectTo="/home" ><Login /></PublicRoute>

 //Auth Routes
 const HomePage = <PrivateRoute redirectTo="/" ><Dashboard /></PrivateRoute>
 const ProfilePage = <PrivateRoute redirectTo="/" ><Profile /></PrivateRoute>

 return (
  <BrowserRouter>
   <Routes>
    {/* Default Routes */}
    <Route path="/" element={LoginPage} />
    {/* Private Routes */}
    <Route path="/home" element={HomePage} />
    <Route path="/profile" element={ProfilePage} />

   </Routes>
  </BrowserRouter>
 )
}


export default Router;