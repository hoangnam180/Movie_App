/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import WrapperProvider from "./context/itemmovie-context";

const rootNode = document.getElementById('root');
ReactDOM.render(
<React.StrictMode> 
  <BrowserRouter>
    <WrapperProvider>
      <App />
    </WrapperProvider>
  </BrowserRouter>
</React.StrictMode>, rootNode);

