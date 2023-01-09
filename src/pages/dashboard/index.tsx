import { useNavigate } from "react-router-dom";
import useDecoder from "../../hooks/useDecoder";
import { Text, Button, Spacer } from "@nextui-org/react";
import { Container } from "./styles";
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
      <Spacer />
      <Text h1>Olá,{name}</Text>
      <Spacer y={2} />
      <Container>
        <Button onPress={() => toProfile()}>Perfil</Button>
      </Container>
    </Container>
  );
};

export default Dashboard;
