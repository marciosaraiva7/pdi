
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { username } from "../../store/auth/reducer";




const Dashboard = () => {

 const navigate = useNavigate()
 const name = useSelector(username)

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

