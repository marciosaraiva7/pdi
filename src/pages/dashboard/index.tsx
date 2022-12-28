import { useNavigate } from "react-router-dom";
import useDecoder from "../../hooks/useDecoder";
import { Switch, useTheme, Text } from '@nextui-org/react';
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
      <Text h1>Olá,{name}</Text>
      <button onClick={() => toProfile()}>to Profile</button>
    </div>
  );
};

export default Dashboard;
