import { useNavigate } from "react-router-dom";
import useDecoder from "../../hooks/useDecoder";
import { Container, ContainerText, SubTitle, Title } from "./styles";
import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import Player from "../../components/player";
import { spotifyToken } from "../../store/music/reducer";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const tokenSpotify = useSelector((state: any) => state.music.spotifyToken);

  const decode = useDecoder(token ?? "");
  const name = decode.name;
  const image = decode.image;

  function toProfile() {
    navigate("/profile");
  }

  console.log(tokenSpotify);

  return (
    <Container>
      <ContainerText>
        <Title>Olá,{name}</Title>
        <SubTitle>Pesquise aqui prévia de musicas que você adora</SubTitle>
      </ContainerText>
      <Player accessToken={tokenSpotify} trackUri={""} />
    </Container>
  );
};

export default Dashboard;
