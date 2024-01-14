import Terminal from "react-bash";
import "../css/Terminal2.css";

function Terminal2({ store }) {
  const setPage = store.uiStore((state) => state.setPage);
  const addFileToOpenFiles = store.uiStore((state) => state.addFileToOpenFiles);
  const setEditedFile = store.uiStore((state) => state.setEditedFile);

  const run = {
    exec: ({ structure, history, cwd }, args) => {
      const command = args.args[0];
      if (!command) {
        return {
          structure,
          cwd,
          history: history.concat({ value: "run: missing operand" }),
        };
      }
      return {
        structure,
        cwd,
        history: history.concat({ value: `running ${command}` }),
      };
    },
  };

  const code = {
    exec: ({ structure, history, cwd }, args) => {
      const file = args.args[0];
      if (!file) {
        return {
          structure,
          cwd,
          history: history.concat({ value: "code: missing operand" }),
        };
      }
      addFileToOpenFiles(file);
      setEditedFile(file);
      setPage("editor");
      return {
        structure,
        cwd,
        history: history.concat({ value: `opening ${file}` }),
      };
    },
  };

  const extensions = { run, code };

  const structure = store.playerStore((state) => state.fileStructureForTerminal);

  return (
    <div style={{ display: "inline-block", height: "100vh", width: "100%" }}>
      <Terminal
        prefix=""
        theme={Terminal.Themes.DARK}
        extensions={extensions}
        structure={structure()}
      />
    </div>
  );
}

export default Terminal2;
