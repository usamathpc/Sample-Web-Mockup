import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "../src/theme";
import "../src/theme/styles.css";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
