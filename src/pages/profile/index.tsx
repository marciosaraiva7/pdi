import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signout } from "../../store/auth/actions";



const Profile = () => {
 const navigate = useNavigate()
 const dispatch = useDispatch()

 function handleLogout() {
  dispatch(signout())
  navigate("/")
 }

 return (
  <div>
   {/* <h1>Esse é o perfil do {username}</h1> */}
   <button onClick={handleLogout}>logout</button>
  </div>
 )
}

export default Profile;

