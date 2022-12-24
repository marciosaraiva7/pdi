import { CSSProperties, useState, useEffect } from "react";
//styles
import { ButtonLogin, Container, ContainerCredentials, Input, TextFeedback, Title } from "./styles";
import RingLoader from "react-spinners/RingLoader";

const Login = () => {
  let baseURL = "https://pdi-backend-next.vercel.app/api";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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

    try {
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
        window.localStorage.setItem("token", objectData.body.token)

      } else {
        return setErrorMessage(objectData.body.message)
      }
      window.location.reload();

    }
    catch (err) {
      console.log(err)
    }




  }

  useEffect(() => {
    if (errorMessage) {
      setErrorMessage('');
    }
  }, [email, password])

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
