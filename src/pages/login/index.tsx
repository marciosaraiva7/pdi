import { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { signin } from "../../store/auth/actions";

//styles
import { ButtonLogin, Container, ContainerCredentials, Input, TextFeedback, Title } from "./styles";
import RingLoader from "react-spinners/RingLoader";

const Login = () => {
  let baseURL = "https://pdi-backend-next.vercel.app/api";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  async function handleLogin(event: { preventDefault: () => void; }) {

    setLoading(true);

    event.preventDefault();

    const response = await fetch(baseURL + '/auth/login', {
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
    setLoading(false)
  }

  const handleDisable = () => {
    if (!email || !password || loading) {
      return true
    } else {
      return false
    }
  }

  return (
    <Container>
      <Title>Login</Title>
      <ContainerCredentials>
        <form onSubmit={handleLogin}>
          <Input value={email} type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
          <Input value={password} type='text' placeholder='senha' onChange={(e) => setPassword(e.target.value)} />
          <ButtonLogin type="submit" disabled={handleDisable()}>
            {loading ? (<RingLoader
              color={'blue'}
              loading={loading}
              cssOverride={override}
              size={14}
              aria-label="Loading Spinner"
              data-testid="loader"
            />) : ('Entrar')}</ButtonLogin>
          <TextFeedback>{errorMessage}</TextFeedback>
        </form>
      </ContainerCredentials>
    </Container>

  )
}

export default Login;
