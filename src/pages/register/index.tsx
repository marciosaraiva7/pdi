import React, { useState, useEffect, useRef, ChangeEvent } from "react";

import { Button, Loading, Tooltip, Input } from "@nextui-org/react";
import {
  Container,
  ContainerTitle,
  ContainerCredentials,
  Subtitle,
  Title,
  ButtonRegister,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { PressEvent } from "@react-types/shared";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [photo, setPhoto] = useState<File>();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<any>();

  const theme = localStorage.getItem("theme");

  const navigate = useNavigate();
  const success = () => toast("Cadastro criado com sucesso");
  const error = () => toast("Usuário ja existe, tente outra credencial");

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
          photo: preview,
        }),
      });

      const data = await response.json();
      const objectData = {
        status: response.status,
        body: data,
      };
      if (objectData.status === 200) {
        success();
      }
      setLoading(false);
      setErrorMessage(objectData.body.message);
      error();
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
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(photo);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [photo]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setPhoto(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setPhoto(e.target.files[0]);
  };

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
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme ? "dark" : "light"}
      />
      <ContainerTitle>
        <Title>Cadastro</Title>
        <Subtitle>Escreva seus dados para criar sua conta no web app</Subtitle>
      </ContainerTitle>
      <ContainerCredentials>
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
          style={{ display: "none" }}
        />
        <Button shadow size="sm" onPress={(e) => handleUploadClick(e)}>
          {" "}
          inserir foto{" "}
        </Button>
        {photo && <img src={preview} />}
        <ButtonRegister
          type="submit"
          disabled={handleDisable()}
          onClick={handleRegister}
        >
          {loading ? (
            <Loading type="spinner" color="currentColor" size="sm" />
          ) : (
            "Cadastrar"
          )}
        </ButtonRegister>
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

export default Register;
