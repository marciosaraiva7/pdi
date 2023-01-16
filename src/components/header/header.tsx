import {
  Text,
  Grid,
  Dropdown,
  User,
  Switch,
  useTheme,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import {  useNavigate } from "react-router-dom";
import { Container, ButtonLink, ButtonLogout } from "./styles";

//hooks
import { useDispatch } from "react-redux";
import useDecoder from "../../hooks/useDecoder";

//icons
import { SunIcon } from "../../assets/icons/SunIcon";
import { MoonIcon } from "../../assets/icons/MoonIcon";
import { signout } from "../../store/auth/actions";

const Header = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const token = localStorage.getItem("token");
  const user = useDecoder(token ?? "");
  const name = user.name;

  const navigate = useNavigate();

  function toProfile() {
    navigate("/profile");
  }
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signout());
    window.localStorage.removeItem("token");
    navigate(0);
  }

  return (
    <Container>
      <Text h1>PDI</Text>

      <Grid >
        <Dropdown placement="bottom-left">
          <Dropdown.Trigger css={{marginRight: "50px"}}>
            <User
              bordered
              as="button"
              size="lg"
              color="primary"
              name={name}
              description="@marciosaraiva7"
              src="https://xsgames.co/randomusers/avatar.php?g=male"
            />
          </Dropdown.Trigger>
          <Dropdown.Menu color="secondary" aria-label="User Actions">
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Você entrou com
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                {name}
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              <ButtonLink to={"/profile"}>Meu Perfil</ButtonLink>
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Usuários</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" color="error" withDivider>
              <ButtonLogout onClick={() => handleLogout()}>
                Log Out
              </ButtonLogout>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Switch
          size="lg"
          bordered
          animated
          iconOff={<SunIcon filled />}
          iconOn={<MoonIcon filled />}
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
      </Grid>
    </Container>
  );
};

export default Header;
