import "@rainbow-me/rainbowkit/styles.css";
import '../styles.css'
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import * as React from "react";
import { WagmiConfig } from "wagmi";

import { chains, client } from "../services/wagmi";
import { ChakraProvider } from "@chakra-ui/react";
import { StoreContext, store } from "../services/stores/store";

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <ChakraProvider>
      <WagmiConfig client={client}>
        <StoreContext.Provider value={store}>
          <RainbowKitProvider chains={chains}>
              <NextHead>
                <title>Pregel Bridge</title>
              </NextHead>

              {mounted && <Component {...pageProps} />}
            
          </RainbowKitProvider>
        </StoreContext.Provider>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default App;
