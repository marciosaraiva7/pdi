import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const darkTheme = {
  background: "#000000",
  color: "#f1f1f1",
  subtitle: "#dadedf",
  inputBackground: "#222222",
  border: "#1170ed",
};

export const lightTheme = {
  background: "#dadedf",
  color: "#000000",
  subtitle: "#999999",
  inputBackground: "#ffffff",
  border: "#1170ed",
};
