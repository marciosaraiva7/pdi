
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'

type decodeType = {
 name: string
}

const token = localStorage.getItem("token");
const decode: decodeType = jwt_decode(token ?? "");
const name = decode.name;


const Dashboard = () => {

 const navigate = useNavigate();

 function toProfile() {
  navigate("/Profile")
 }



 return (
  <div>
   <h1>Olá, {name}</h1>
   <button onClick={() => toProfile()}>to Profile</button>
  </div>

 )
}


export default Dashboard;

