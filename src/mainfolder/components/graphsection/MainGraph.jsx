

import { Stack } from '@mui/material'
import React from 'react'
import FirstChart from './FirstChart'
import SecondChart from './SecondChart'

const MainGraph = () => {
  return (
    <Stack direction='row'>
     <FirstChart/>
     <SecondChart/>
    </Stack>  
    )
}

export default MainGraph
