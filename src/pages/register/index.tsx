import React, { useState, useEffect, useRef, ChangeEvent } from "react";

import {
  Text,
  Button,
  Loading,
  Container,
  Tooltip,
  Input,
  Spacer,
} from "@nextui-org/react";
import { GitHubCard } from "../../components/githubCard";
import { useNavigate } from "react-router-dom";
import { PressEvent } from "@react-types/shared";
import { fileURLToPath } from "url";
import { read } from "fs";

const Register = () => {
  let baseURL = "https://pdi-backend-next.vercel.app/api";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("Content-Type", "application/json");
  //image value
  const [photo, setPhoto] = useState<File>()
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<any>();

  const navigate = useNavigate();

  async function handleRegister() {
    setLoading(true);

    try {
      const response = await fetch(baseURL + "/auth/register", {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify({
          name,
          email,
          password,
          confirmpassword,
          photo: preview
        }),
      });

      const data = await response.json();
      const objectData = {
        status: response.status,
        body: data,
      };
      if (objectData.status === 200) {
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
  }, [name, email, password, confirmpassword]);

  useEffect(() => {
    if (!photo) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(photo)
    setPreview(objectUrl)


    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [photo])

const onSelectFile = (e: any) => {
  if (!e.target.files || e.target.files.length === 0) {
      setPhoto(undefined)
      return
  }

  // I've kept this example simple by using the first image instead of multiple
  setPhoto(e.target.files[0])
}


  const handleUploadClick = (e: PressEvent) => {
    // 👇 We redirect the click event onto the hidden input element
    inputRef.current?.click();
  };

  const handleDisable = () => {
    if (!name || !email || !password || !confirmpassword || loading) {
      return true;
    } else {
      return false;
    }
  };

  const clearCredentials = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Container
      css={{
        display: "flex",
        flexFlow: "row",
        gap: "100px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container css={{ width: "100%", padding: "0px" }}>
        <Container
          css={{
            padding: "0px",
            marginBottom: "$15",
          }}
        >
          <Text
            h1
            size={60}
            css={{
              textAlign: "left",
            }}
            weight="bold"
          >
            Criar Usuário
          </Text>
          <Text
            h5
            css={{
              color: "$neutralLowLight",
              textAlign: "left",
              fontWeight: "400",
            }}
          >
            Insira suas credenciais para acessar o painel
          </Text>
        </Container>
        <Container
          css={{
            display: "flex",
            flexDirection: "column",
            padding: "0px",
            gap: "$10",
          }}
        >
          <Input
            clearable
            bordered
            animated
            color="primary"
            labelPlaceholder="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            css={{ marginBottom: "$5" }}
          />
          <Input
            clearable
            bordered
            animated
            color="primary"
            labelPlaceholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            css={{ marginBottom: "$5" }}
          />
          <Input.Password
            clearable
            bordered
            animated
            color="primary"
            labelPlaceholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input.Password
            clearable
            bordered
            animated
            color="primary"
            labelPlaceholder="confirmar senha"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            type="file"
            ref={inputRef}
            onChange={onSelectFile}
            style={{display: 'none'}}
          />
          <Button
            shadow
            size="sm"
            onPress={(e) => handleUploadClick(e)}
            
            css={{ background: "$brandPure" }}
          > inserir foto </Button>
          {photo &&  <img src={preview} /> }
          <Button
            type="submit"
            shadow
            size="lg"
            disabled={handleDisable()}
            onPress={() => handleRegister()}
             css={{ background: "$brandPure" }}
          >
            {loading ? (
              <Loading type="spinner" color="currentColor" size="sm" />
            ) : (
              "Cadastrar"
            )}
          </Button>
          <Container css={{ display: "flex", justifyContent: "center" }}>
            {errorMessage && (
              <Tooltip content="Tente novamente" color="error">
                <Button
                  flat
                  auto
                  color="error"
                  onClick={() => clearCredentials()}
                >
                  {errorMessage}
                </Button>
              </Tooltip>
            )}
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Register;
