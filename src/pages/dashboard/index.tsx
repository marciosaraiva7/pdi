import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDecoder from "../../hooks/useDecoder";
import { Text, Button, Container, Spacer } from "@nextui-org/react";

const Dashboard = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const decode = useDecoder(token ?? "");
  const name = decode.name;
  const image = decode.image;

  function toProfile() {
    navigate("/profile");
  }

  return (
    <div>
      <Spacer />
      <Text h1>Olá,{name}</Text>
      <Spacer y={2} />
      <Container>
        <Button onPress={() => toProfile()}>Perfil</Button>
      </Container>
    </div>
  );
};

export default Dashboard;
