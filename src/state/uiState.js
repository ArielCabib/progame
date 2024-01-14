import { create } from "zustand";
import { persist } from "zustand/middleware";

export const uiStore = create(
  persist(
    (set, get) => ({
      page: "dashboard",
      setPage: (page) => set({ page: page }),
    }),
    {
      name: "ui",
    }
  )
);
