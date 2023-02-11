import { useNavigate } from "react-router-dom";
import useDecoder from "../../hooks/useDecoder";
import { Button, Text } from "@nextui-org/react";
import { Container, ContainerText, SubTitle, Title } from "./styles";
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
      <ContainerText>
        <Title>Olá,{name}</Title>
        <SubTitle>
          Esses são os clientes atuais
        </SubTitle>
      </ContainerText>
    </Container>
  );
};

export default Dashboard;
