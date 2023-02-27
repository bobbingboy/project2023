import React from 'react';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { ColorModeContext, useMode } from './theme';
import Topbar from './scenes/global/Topbar';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
          </main>
        </div>
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
