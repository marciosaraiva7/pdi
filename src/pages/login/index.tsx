import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { signin } from "../../store/auth/actions";


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');

  async function handleLogin(event: { preventDefault: () => void; }) {


    event.preventDefault();

    const response = await fetch('https://pdi-backend-next.vercel.app/api/auth/login', {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await response.json();
    const objectData = {
      status: response.status,
      body: data
    }

    if (objectData.status === 200) {
      dispatch(signin());
      localStorage.setItem("token", objectData.body.token)
      navigate("/Dashboard");
    } else {
      setErrorMessage(objectData.body.message)
    }

  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input value={email} type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        <input value={password} type='text' placeholder='senha' onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">login</button>
        <p>{errorMessage}</p>
      </form>
    </div>

  )
}

export default Login;
