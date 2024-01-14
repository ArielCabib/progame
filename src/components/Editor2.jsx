import { Editor } from '@monaco-editor/react';

function Editor2({store}) {
    return (
        <div style={{height: '100hv'}}>
            <Editor theme="vs-dark" height="100vh" defaultLanguage="javascript" />
        </div>
    );
}

export default Editor2;