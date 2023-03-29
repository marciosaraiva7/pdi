import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useDecoder from "../../hooks/useDecoder";
import { Container, ContainerText, SubTitle, Title, Input } from "./styles";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState("");
  const [botResponse, setBotResponse] = useState("");

  const decode = useDecoder(token ?? "");
  const name = decode.name;
  const image = decode.image;
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("Content-Type", "application/json");

  function toProfile() {
    navigate("/profile");
  }

  async function HandleForm(e: any) {
    e.preventDefault();
    fetch("http://localhost:3000/api/AI/chatAI", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        Connection: "keep-alive",
      },
      body: JSON.stringify({
        message,
      }),
    })
      .then((res) => res.json())
      .then((data) => setBotResponse(data.message.content.replace("Jarvis: ", "")))
      .catch((error) => console.log(error));
  }

  function createMarkup() {
    return { __html: botResponse };
  }

  return (
    <Container>
      <ContainerText>
        <Title>Olá,{name}</Title>
        <SubTitle>Pergunte o que quiser</SubTitle>
        <div>
          <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </ContainerText>
      <form onSubmit={(e) => HandleForm(e)}>
        <Input
          placeholder="escreva algo"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
      <button type="submit" onClick={HandleForm}>
        Enviar
      </button>
    </Container>
  );
};

export default Dashboard;
