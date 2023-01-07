import { Container, Text, Grid, Dropdown, User, Switch, useTheme, Button } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes'
import { useNavigate } from "react-router-dom";
//hooks
import useDecoder from "../hooks/useDecoder";

//icons
import { SunIcon } from "../assets/icons/SunIcon";
import { MoonIcon } from "../assets/icons/MoonIcon";

const Header = () => {
 const { setTheme } = useNextTheme();
 const { isDark, type } = useTheme();

 const token = localStorage.getItem("token");
 const decode = useDecoder(token ?? "");
 const name = decode.name
 const image = decode.image

 const navigate = useNavigate();

 function toProfile() {
  navigate("/profile");
}


 return (
  <Container
   responsive={false}
   display={"flex"}
   direction={'row'}
   alignItems={'center'}
   justify={'space-around'}
   css={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    margin: 0,
    borderBottom: '2px',
    borderBottomStyle: 'solid',
    borderColor: '$brandPure',
    width: '100%',
    height: '10vh',
   }}>

   <Text h1>PDI</Text>
   <Grid>
    <Switch
     size="lg"
     bordered
     animated
     iconOff={<SunIcon filled />}
     iconOn={<MoonIcon filled />}
     checked={isDark}
     onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
    />
   </Grid>
   <Grid>
    <Dropdown placement="bottom-left">
     <Dropdown.Trigger>
      <User
       bordered
       as="button"
       size="lg"
       color="primary"
       name={name}
       description="@marciosaraiva7"
       src={image}
      />
     </Dropdown.Trigger>
     <Dropdown.Menu color="secondary" aria-label="User Actions">
      <Dropdown.Item key="profile" css={{ height: "$18" }}>
       <Text b color="inherit" css={{ d: "flex" }}>
        Você entrou com
       </Text>
       <Text b color="inherit" css={{ d: "flex" }}>
        marcio@example.com
       </Text>
      </Dropdown.Item>
      <Dropdown.Item key="settings" withDivider>
       <Button css={{backgroundColor: 'transparent', color: '$primary'}} onPress={() => toProfile()}>
       Meu Perfil
       </Button>
      </Dropdown.Item>
      <Dropdown.Item key="team_settings">Meus Itens</Dropdown.Item>
      <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
      <Dropdown.Item key="help_and_feedback" withDivider>
       Help & Feedback
      </Dropdown.Item>
      <Dropdown.Item key="logout" color="error" withDivider>
       Log Out
      </Dropdown.Item>
     </Dropdown.Menu>
    </Dropdown>
   </Grid>
  </Container>
 )
}

export default Header;