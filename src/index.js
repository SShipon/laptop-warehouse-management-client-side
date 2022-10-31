import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

/* this is hello i am shipon form comilla is very nice zone how dow you dow in my fine you most like you html css javascript node.js mongodb express react.js redux tailwind css react bootstrap next.js typeScript sass Mui github vscode visual studio code thanks you coder and  */
reportWebVitals();
