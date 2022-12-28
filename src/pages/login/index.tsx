import React, { useState, useEffect, } from "react";

import { Text, Button, Loading, Container, Input, Tooltip, Spacer } from '@nextui-org/react';
import { GitHubCard } from "../../components/githubCard";
import { useNavigate } from "react-router-dom";


const Login = () => {
  let baseURL = "https://pdi-backend-next.vercel.app/api";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');

  const navigate = useNavigate();





  async function handleLogin() {

    setLoading(true);

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
        window.localStorage.setItem("token", objectData.body.token);
        navigate(0);
        return


      }
      setLoading(false);
      setErrorMessage(objectData.body.message);
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

  const clearCredentials = () => {
    setEmail('');
    setPassword('');
  }

  return (
    <Container css={{ display: 'flex', flexFlow: 'row', gap: '100px', justifyContent: 'center', alignItems: 'center' }}>
      <Container>
        <GitHubCard />
      </Container>
      <Container css={{ width: '100%', padding: '0px' }}>
        <Container css={{
          padding: '0px',
          marginBottom: '$15'
        }}>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
              textAlign: 'left',
            }}
            weight="bold"
          >Login</Text>
          <Text h5 css={{ color: "$neutralLowLight", textAlign: 'left', fontWeight: '400' }}>Insira suas credenciais para acessar o painel</Text>
        </Container>
        <Container css={{
          display: "flex",
          flexDirection: "column",
          padding: '0px',
          gap: '$10'
        }}>

          <Input
            clearable
            bordered
            animated
            color="primary"
            labelPlaceholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            css={{ marginBottom: '$5' }}
          />
          <Input.Password
            clearable
            bordered
            animated
            color="primary"
            labelPlaceholder='senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            shadow
            size="lg"
            disabled={handleDisable()}
            onPress={() => handleLogin()}
            css={{ background: "$brandPure" }}>
            {loading ? <Loading type="spinner" color="currentColor" size="sm" /> : "Entrar"}
          </Button>
          <Container css={{ display: 'flex', justifyContent: 'center' }}>
            {errorMessage && <Tooltip content="Tente novamente" color="error">
              <Button flat auto color="error" onClick={() => clearCredentials()}>{errorMessage}</Button>
            </Tooltip>}
          </Container>
        </Container>
      </Container>
    </Container>

  )
}

export default Login;
