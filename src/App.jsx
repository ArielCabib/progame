import './App.css';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './components/Dashboard';
import Editor2 from './components/Editor2';
import Terminal2 from './components/Terminal2';
import Options from './components/Options';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App({store, cowScript}) {
  const page = store.uiStore((state) => state.page);
  const setPage = store.uiStore((state) => state.setPage);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
      <Grid container spacing={2} style={{height: '100%'}}>
        <Grid item xs={2}>
          <h1>Cow Scripting</h1>
          <Button onClick={() => setPage('dashboard')} width="100%">Dashboard</Button><br />
          <Button onClick={() => setPage('editor')} width="100%">Editor</Button><br />
          <Button onClick={() => setPage('terminal')} width="100%">Terminal</Button><br />
          <Button onClick={() => setPage('options')} width="100%">Options</Button><br />
        </Grid>
        <Grid item xs={10}>
          {page === 'dashboard' && <Dashboard store={store}/>}
          {page === 'editor' && <Editor2 store={store} />}
          {page === 'terminal' && <Terminal2 store={store} />}
          {page === 'options' && <Options store={store} />}
        </Grid>
      </Grid>
      

    </div></ThemeProvider>
  );
}

export default App;
