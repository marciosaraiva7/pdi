import "./App.css";
import Router from "./pages/routes/routes";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme } from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
