

import React from 'react'
import { Box, Container } from '@mui/material'
import NavBar from '../components/navsection/NavBar.jsx'
import HeroSection from '../components/hero/HeroSection.jsx'
import AccordianSection from '../components/navsection/AccordianSection.jsx'
import CardDisplay from '../components/cardSetion/CardDisplay.jsx'
import MainTab from '../components/tabSection/MainTab.jsx'
import MainGraph from '../components/graphsection/MainGraph.jsx'
const LandingPage = ({mode, setMode}) => {
  return (
    <Container>
       <Box>
      <NavBar mode={mode} setMode={setMode}/>
      <HeroSection/>
      <AccordianSection/>
      <CardDisplay/>
      <MainTab/>
      <MainGraph/>
    </Box>
    </Container>
    
  )
}

export default LandingPage
