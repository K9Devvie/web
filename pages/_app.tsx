import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react"; // Import extendTheme

import { Navbar } from "../components/Navbar";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "goerli";

// Define a custom Chakra UI theme with a green background and noise texture
const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: `white`, // Example noise texture URL
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <ChakraProvider theme={customTheme}> {/* Apply the custom theme */}
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
