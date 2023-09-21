import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { Canvas } from "react-three-fiber";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <Canvas> */}
        <App />
      {/* </Canvas> */}
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
