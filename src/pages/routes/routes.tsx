
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

 const token = localStorage.getItem("token")
 

 const PrivateRoute = ({ children, redirectTo }: PrivateProps) => {
  return token ? children : <Navigate to={redirectTo} />
 }

 //Default Routes
 const LoginPage = <Login />

 //Auth Routes
 const DashboardPage = <PrivateRoute redirectTo="/" ><Dashboard /></PrivateRoute>
 const ProfilePage = <PrivateRoute redirectTo="/" ><Profile /></PrivateRoute>

 return (
  <BrowserRouter>
   <Routes>
    {/* Default Routes */}
    <Route path="/" element={LoginPage} />
    {/* Private Routes */}
    <Route index path="/Dashboard" element={DashboardPage} />
    <Route path="/Profile" element={ProfilePage} />

   </Routes>
  </BrowserRouter>
 )
}


export default Router;