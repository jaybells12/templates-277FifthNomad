import { GlobalStyles } from "@/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { Public_Sans } from "next/font/google";
import { PortraitCondensed, PortraitText } from "src/fonts/fonts";

export const publicSans = Public_Sans({ subsets: ["latin"] });

const theme = extendTheme({
  fonts: {
    PortraitCond: PortraitCondensed.style.fontFamily,
    PortraitText: PortraitText.style.fontFamily,
    body: `${PortraitText.style.fontFamily}, ${publicSans.style.fontFamily}, sans-serif`,
    heading: `${PortraitCondensed.style.fontFamily}, ${publicSans.style.fontFamily}, sans-serif`,
  },
  colors: {
    brand: {
      primary: "#fff8f2",
      accent: "#86878d",
      trim: "#3B3D47",
    },
  },
});

export const StyleProvider: FunctionComponent<any> = (props: any) => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <ChakraProvider theme={theme}>{props.children}</ChakraProvider>
    </ThemeProvider>
  );
};
