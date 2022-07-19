import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
root.render(<App />);
