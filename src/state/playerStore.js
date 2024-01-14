import { create } from "zustand";
import { persist } from "zustand/middleware";

export const playerStore = create(
  persist(
    (set, get) => ({
      reset: () => set({ money: 0, apples: 0, ownedFarms: [], files: {} }),
      getSave: () => get(),
      setSave: (save) => set(save),

      files: {},
      setFileContents: (file, contents) => {
        const newFiles = get().files;
        newFiles[file] = contents;
        set({ files: newFiles });
      },
      fileContents: (file) => get().files[file],

      money: 0,
      modMoney: (amount) => set({ money: get().money + amount }),

      apples: 0,
      modApples: (amount) => set({ apples: get().apples + amount }),

      ownedFarms: [],
      addFarm: (farm) =>
        set({ ownedFarms: [...new Set(get().ownedFarms.concat(farm))] }),

    }),
    {
      name: "player",
    }
  )
);
