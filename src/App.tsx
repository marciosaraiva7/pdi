import "./App.css";
import Router from "./pages/routes/routes";
import { useTheme } from '@nextui-org/react'
import { Provider } from "react-redux";
import { store } from "./store/index";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react"
import { lightTheme, darkTheme } from "./themes/theme";

function App() {

  const { isDark } = useTheme();

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
        <NextUIProvider disableBaseline
        >
          <Router />
        </NextUIProvider>
      </NextThemesProvider>
    </Provider>
  );
}

export default App;
