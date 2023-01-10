import "./App.css";
import Router from "./pages/routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { NextUIProvider, useTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { lightTheme, darkTheme } from "./themes/theme";

function App() {
  const { isDark, type,theme } = useTheme();
  return (
    <Provider store={store}>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider theme={theme}>
          <Router />
        </NextUIProvider>
      </NextThemesProvider>
    </Provider>
  );
}

export default App;
