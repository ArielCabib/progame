import { create } from "zustand";
import { persist } from "zustand/middleware";

export const uiStore = create(
  persist(
    (set, get) => ({
      page: "dashboard",
      setPage: (page) => set({ page: page }),
      openFiles: [],
      clearFiles: () => set({ openFiles: [] }),
      addFileToOpenFiles: (file) =>
        set({ openFiles: [...new Set(get().openFiles.concat(file))] }),
      setEditedFile: (file) => set({ editedFile: file, editorTabIndex: get().openFiles.indexOf(file) }),
      editedFile: null,
      editorTabIndex: 0,
      setEditorTabIndex: (index) => set({ editorTabIndex: index, editedFile: get().openFiles[index] }),
    }),
    {
      name: "ui",
    }
  )
);
