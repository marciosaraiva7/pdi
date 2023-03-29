import React, { useState, useEffect } from "react";

import { Button, Loading, Tooltip } from "@nextui-org/react";
import {
  ButtonLink,
  Container,
  ContainerCredentials,
  ContainerTitle,
  Subtitle,
  Title,
  Input,
  ButtonLogin,
  ContainerButtonLink,
} from "./styles";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const baseURL = "https://pdi-backend-next.vercel.app/api";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("Content-Type", "application/json");

  const navigate = useNavigate();

  async function handleLogin() {
    setLoading(true);

    try {
      const response = await fetch(baseURL + "/auth/login", {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      const objectData = {
        status: response.status,
        body: data,
      };
      if (objectData.status === 200) {
        window.localStorage.setItem("token", objectData.body.token);
        navigate(0);
        return;
      }
      setLoading(false);
      setErrorMessage(objectData.body.message);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (errorMessage) {
      setErrorMessage("");
    }
  }, [email, password]);

  const handleDisable = () => {
    if (!email || !password || loading) {
      return true;
    } else {
      return false;
    }
  };

  const clearCredentials = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <ContainerTitle>
        <Title>Login</Title>
        <Subtitle>Insira suas credenciais para acessar o painel</Subtitle>
      </ContainerTitle>
      <ContainerCredentials>
        <Input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonLogin
          type="submit"
          disabled={handleDisable()}
          onClick={() => handleLogin()}
        >
          {loading ? (
            <Loading type="spinner" color="currentColor" size="sm" />
          ) : (
            "Entrar"
          )}
        </ButtonLogin>
        <ContainerButtonLink>
          <ButtonLink to={"/register"}>Registrar</ButtonLink>
        </ContainerButtonLink>
        {errorMessage && (
          <Tooltip content="Tente novamente" color="error">
            <Button flat auto color="error" onClick={() => clearCredentials()}>
              {errorMessage}
            </Button>
          </Tooltip>
        )}
      </ContainerCredentials>
    </Container>
  );
};

export default Login;
