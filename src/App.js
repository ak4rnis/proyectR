import logo from './logo.svg';
import './App.css';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Navegacion from './components/navegacion/Navegacion';
import LayoutMenuLateral from './components/pantalla/LayoutMenuLateral';
import LayoutCentro from './components/pantalla/LayoutCentro';
import LayoutInformacion from './components/pantalla/LayoutInformacion';

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme} >
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navegacion />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <LayoutMenuLateral />
          <LayoutCentro />
          
        </Stack> 
      </Box>
    </ThemeProvider>
  );
}

export default App;
