import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { uiStore } from "./state/uiState";
import { playerStore } from "./state/playerStore";

const store = {
  uiStore,
  playerStore,
}

const cowScript  = {
  sleep: (ms) => new Promise(resolve => setTimeout(resolve, ms)),
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App store={store} cowScript={cowScript} />
  </React.StrictMode>,
);
