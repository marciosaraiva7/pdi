import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signout } from "../../store/auth/actions";
import { Button, Container } from "@nextui-org/react";





const Profile = () => {
 const navigate = useNavigate()
 const dispatch = useDispatch()

 function handleLogout() {
  dispatch(signout())
  window.localStorage.removeItem("token")
  navigate(0)
 }

 return (
  <div>
   {/* <h1>Esse é o perfil do {username}</h1> */}
   <Container>
    <Button bordered color="error" auto onPress={handleLogout}>Sair</Button>
   </Container>
  </div>
 )
}

export default Profile;

