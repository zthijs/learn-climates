import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
