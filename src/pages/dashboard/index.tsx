import { useNavigate } from "react-router-dom";
import useDecoder from "../../hooks/useDecoder";
import { Button, Text } from "@nextui-org/react";
import { Container, Title } from "./styles";
import Cards from "../../components/cards";
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
    <Container>
      <Title>Olá,{name}</Title>
      <Text
        h5
        css={{
          color: "$neutralLowLight",
          textAlign: "left",
          fontWeight: "400",
        }}
      >
        Esses são os clientes atuais
      </Text>
      {/* <Container>
        <Button onPress={() => toProfile()}>Perfil</Button>
      </Container> */}
      <Cards />
    </Container>
  );
};

export default Dashboard;
