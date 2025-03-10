import './App.css'
import React, { useState } from 'react';
import {Box, createTheme} from '@mui/material'
import LandingPage from './mainfolder/pages/LandingPage';
import { ThemeProvider } from '@emotion/react';



const App =() => {
 
   const [mode, setMode] = useState("light")

   const darkTheme = createTheme({
    palette:{
      mode:mode
    }
   })


  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"}>
     
     <LandingPage mode={mode} setMode={setMode}/>
    </Box>
    </ThemeProvider>
     
    </>
  )
}

export default App
