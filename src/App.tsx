import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveToken } from "../src/store/music/actions";
import Router from "./pages/routes/routes";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./themes/theme";

function App() {
  const theme = localStorage.getItem("theme");
  let spotifyToken = localStorage.getItem("spotifyToken");
  const spotifyAuthURL = "https://accounts.spotify.com/api/token";
  const authParameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials&client_id=6576c937abb24a9e88a8d40c35b766bd&client_secret=22dcf1deaf4c497cbcb283e2bbdfb412",
  };
  const dispatch = useDispatch();

  fetch(spotifyAuthURL, authParameters)
    .then((result) => result.json())
    .then((dataSpotify) => (spotifyToken = dataSpotify.access_token));
  dispatch(saveToken(spotifyToken || ""));

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Router />
      </>
    </ThemeProvider>
  );
}

export default App;
