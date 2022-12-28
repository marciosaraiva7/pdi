import { useNavigate } from "react-router-dom";
import useDecoder from "../../hooks/useDecoder";
import { Switch, useTheme, Text, Button, Container, Spacer } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes'

const Dashboard = () => {
  const navigate = useNavigate();
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const token = localStorage.getItem("token");

  const decode = useDecoder(token ?? "");
  const name = decode.name




  function toProfile() {
    navigate("/profile");
  }

  return (
    <div>
      <Text h6>tema {type}</Text>

      <Switch
        shadow
        bordered
        animated
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
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
