import { Editor } from "@monaco-editor/react";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

function Editor2({ store }) {
  const openFiles = ["bla.js", "blabla.js"];

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const fileContents = {
    "bla.js": "console.log('hello world1');",
    "blabla.js": "console.log('hello world2');",
  };

  const [openFile, setOpenfile] = useState("bla.js");

  const setFileContents = content => fileContents[openFile] = content;

  return (
    <div style={{height: '100vh'}}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
            {openFiles.map((file) => (
                <Tab label={file} onClick={() => setOpenfile(file)} />
            ))}
          
        </Tabs>
      </Box>

      
    <Editor theme="vs-dark" height="100%" defaultLanguage="javascript" onChange={setFileContents} value={fileContents[openFile]} />
        
    </div>
  );
}

export default Editor2;
