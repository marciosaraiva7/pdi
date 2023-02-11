import React, { useState, useEffect } from "react";
import { Text, Dropdown, User, Switch } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Container, ButtonLink, ButtonLogout, Title } from "./styles";

//hooks
import { useDispatch } from "react-redux";
import useDecoder from "../../hooks/useDecoder";

//icons
import { SunIcon } from "../../assets/icons/SunIcon";
import { MoonIcon } from "../../assets/icons/MoonIcon";
import { signout } from "../../store/auth/actions";
import { switchTheme } from "../../store/styles/actions";

const Header = () => {
  //styled
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    dispatch(switchTheme(updatedTheme));
    localStorage.setItem("theme", updatedTheme);
  };

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
      <Title>PDI</Title>
      <p>{name}</p>
    </Container>
  );
};

export default Header;
