
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
//Default Pages
import Login from "../login";

//Auth Pages
import Dashboard from "../dashboard";
import Profile from "../profile";
interface PrivateProps {
 children: any,
 redirectTo: any,
}

const Router = () => {

 const isLogged = window.localStorage.getItem("token");




 const PrivateRoute = ({ children, redirectTo }: PrivateProps) => {
  return isLogged ? children : <Navigate to={redirectTo} />
 }

 //Default Routes
 const LoginPage = <Login />

 //Auth Routes
 const HomePage = <PrivateRoute redirectTo="/login" ><Dashboard /></PrivateRoute>
 const ProfilePage = <PrivateRoute redirectTo="/login" ><Profile /></PrivateRoute>

 return (
  <BrowserRouter>
   <Routes>
    {/* Default Routes */}
    <Route path="/login" element={LoginPage} />
    {/* Private Routes */}
    <Route path="/home" element={HomePage} />
    <Route path="/profile" element={ProfilePage} />

   </Routes>
  </BrowserRouter>
 )
}


export default Router;