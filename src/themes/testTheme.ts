import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

// 2. Call `createTheme` and pass your custom values
export const darkTheme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      background: "#000000",
      text: "#FFFFFF",
      // brand colors
      primaryLight: "$green200",
      primaryLightHover: "$green300",
      primaryLightActive: "$green400",
      primaryLightContrast: "$green600",
      primary: "#4ADE7B",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",

      // you can also create your own color
      myColor: "#ff4ecd",

      // ...  more colors
      brandPure: "#2C6EF2",
      brandLight: "#C5D7FB",
      brandMedium: "#4985FD",
      brandDark: "#0A3A99",
      highlightPure: "#FF8A00",
      highlightLight: "#FFE3C2",
      highlightMedium: "#CC6E00",
      highlightDark: "#7A4200",
      neutralLowPure: "#000000",
      neutralLowLight: "#A3A3A3",
      neutralLowMedium: "#666666",
      neutralLowDark: "#292929",
      neutralHighpure: "#FFFFFF",
      neutralHighlight: "#F5F5F5",
      neutralHighmedium: "#E0E0E0",
      neutralHighdark: "#CCCCCC",
      feedbackErrorPure: "#EA1F1F",
      feedbackErrorLight: "#FDC4C4",
      feedbackErrorMedium: "#F05656",
      feedbackErrorDark: "#710A0A",
      feedbackSuccessPure: "#3AA141",
      feedbackSuccessLight: "#D2EFD4",
      feedbackSuccessMedium: "#78CE7E",
      feedbackSuccessDark: "#205A24",
    },
    space: {},
    fonts: {},
  },
});
