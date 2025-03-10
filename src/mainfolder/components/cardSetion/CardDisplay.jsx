

import React from 'react'
import { Stack } from '@mui/system'
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'
import ThirdCard from './ThirdCard'
const CardDisplay = () => {
  return (
    <Stack direction='row' gap={3} m={4}>
    <FirstCard/>
    <SecondCard/>
    <ThirdCard/>
    </Stack>
  )
}

export default CardDisplay
