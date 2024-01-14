import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const store = create(
  persist((set, get) => ({
    reset: () => set({ money: 0, apples: 0, ownedFarms: [] }),
    getSave: () => get(),
    setSave: (save) => set(save),

    page: 'dashboard',
    setPage: (page) => set({ page: page }),

    money: 0,
    modMoney: (amount) => set({ money: get().money + amount }),

    apples: 0,
    modApples: (amount) => set({ apples: get().apples + amount }),

    ownedFarms: [],
    addFarm: (farm) => set({ ownedFarms: [...new Set(get().ownedFarms.concat(farm))] }),

    script: "async (cs) => {\n  await cs.sleep(5000);\n  console.log('hello');\n}",
    setScript: (script) => set({ script: script }),
    // bears: 0,
    // increasePopulation: () => set({ bears: get().bears + 1 }),
    // removeAllBears: () => set({ bears: 0 }),
  }), {
    name: 'store', // unique name
  }));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
);
