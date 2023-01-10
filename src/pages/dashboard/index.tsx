import { useNavigate } from "react-router-dom";
import useDecoder from "../../hooks/useDecoder";
import { Button,Text } from "@nextui-org/react";
import { Container, Title } from "./styles";
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
      <Container>
        <Button onPress={() => toProfile()}>Perfil</Button>
      </Container>
    </Container>
  );
};

export default Dashboard;
