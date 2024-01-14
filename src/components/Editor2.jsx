import { Editor } from "@monaco-editor/react";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

function Editor2({ store }) {
  const openFiles = store.uiStore((state) => state.openFiles);
  const editorTabIndex = store.uiStore((state) => state.editorTabIndex);
  const setEditorTabIndex = store.uiStore((state) => state.setEditorTabIndex);
  const editedFile = store.uiStore((state) => state.editedFile);

  const setFileContents = store.playerStore((state) => state.setFileContents);
  const fileContents = store.playerStore((state) => state.fileContents);

  return (
    <div style={{ height: "100vh" }}>
      {openFiles.length === 0 ? (
        <div>
          <h1>No files open...</h1>
        </div>
      ) : (
        <div style={{height: '100%'}}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={editorTabIndex}
              onChange={(event, newValue) => setEditorTabIndex(newValue)}
            >
              {openFiles.map((file) => (
                <Tab label={file} key={file}/>
              ))}
            </Tabs>
          </Box>
          {openFiles.map((file) => (
            <div key={file} hidden={editorTabIndex !== openFiles.indexOf(file)} style={{height: '100%'}}>
              <Editor
                theme="vs-dark"
                height="100%"
                defaultLanguage="javascript"
                onChange={contents => setFileContents(file, contents)}
                value={fileContents(file)}
                
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Editor2;
