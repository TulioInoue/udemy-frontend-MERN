import React from "react";
import { createRoot } from "react-dom/client"; // Mudança importante aqui

import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container); // Cria a "raiz" (root)
root.render(<App />); // Renderiza o App dentro da raiz
