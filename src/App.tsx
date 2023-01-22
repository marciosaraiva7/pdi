import "./App.css";
import { useState, useEffect } from "react";
import Router from "./pages/routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/index";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./themes/theme";

function App() {
  const theme = localStorage.getItem("theme");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Provider store={store}>
          <Router />
        </Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
