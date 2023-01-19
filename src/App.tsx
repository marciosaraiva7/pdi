import "./App.css";
import Router from "./pages/routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/index";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes/theme";

function App() {
  const isDarkTheme = localStorage.getItem("theme");

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
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
