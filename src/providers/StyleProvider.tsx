import { GlobalStyles } from "@/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { FunctionComponent } from "react";

export const StyleProvider: FunctionComponent<any> = (props: any) => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <ChakraProvider>{props.children}</ChakraProvider>
    </ThemeProvider>
  );
};
