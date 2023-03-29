import React, { useState, useEffect, useRef, ChangeEvent } from "react";

import { Button, Loading } from "@nextui-org/react";
import {
  Container,
  ContainerTitle,
  ContainerCredentials,
  Subtitle,
  Title,
  ButtonRegister,
  Input,
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
  const success = (sucessMessage: string) =>
    toast(sucessMessage, { containerId: "Sucess" });
  const error = (errorMessage: string) =>
    toast(errorMessage, { containerId: "Error" });

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
        navigate('/login')
      }
      setLoading(false);
      setErrorMessage(objectData.body.message);
      error("Usuário ja existe, tente outra credencial");
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
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
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
          placeholder="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Input
          placeholder="Confirmar senha"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {/* <input
          type="file"
          ref={inputRef}
          onChange={onSelectFile}
          style={{ display: "none" }}
        /> */}
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
      </ContainerCredentials>
    </Container>
  );
};

export default Register;
