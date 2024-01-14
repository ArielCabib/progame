import { Button } from "@mui/material";
import { save, open } from "@tauri-apps/api/dialog";
import { downloadDir, sep } from "@tauri-apps/api/path";
import { writeFile, readTextFile } from "@tauri-apps/api/fs";

function Options({ store }) {
  const reset = store((state) => state.reset);
  const getSave = store((state) => state.getSave);
  const setSave = store((state) => state.setSave);
  const saveGame = async () => {
    const suggestedFilename = "save.json";
    const filePath = await save({
      defaultPath: (await downloadDir()) + sep + suggestedFilename,
    });
    await writeFile(filePath, JSON.stringify(getSave()));
  };
  const importSave = async () => {
    const filePath = await open({
      multiple: false,
      defaultPath: (await downloadDir()) + sep + "save.json",
    });
    const file = await readTextFile(filePath);
    setSave(JSON.parse(file));
  };

  return (
    <div>
      <h1>Options</h1>
      <Button onClick={reset}>Reset Game</Button>
      <Button onClick={saveGame}>Export Save</Button>
      <Button onClick={importSave}>Import Save</Button>
    </div>
  );
}

export default Options;
