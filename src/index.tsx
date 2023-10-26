import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import salonsData from "./salonsData";

const container = document.getElementById( "app-root" )!;
const root = createRoot( container );




root.render(
  <React.StrictMode >
    <BrowserRouter >
      <App />
    </BrowserRouter >
  </React.StrictMode >,
);
