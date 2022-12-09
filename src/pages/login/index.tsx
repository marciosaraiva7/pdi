import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { signin } from "../../store/auth/actions";

const Login = () => {
 const [name, setName] = useState('');
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const handleLogin = () => {
  if (name.trim().length !== 0) {
   dispatch(signin(name));
   navigate("/Dashboard");
  } else {
   alert("Nome não pode ser vazio")
  }

 }
 return (
  <div>
   <h1>Login</h1>
   <form onSubmit={handleLogin}>
    <input type='text' placeholder='nome' onChange={(e) => setName(e.target.value)} />
    <button type="submit">login</button>
   </form>
  </div>

 )
}

export default Login;

