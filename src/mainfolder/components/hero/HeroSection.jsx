

import React from 'react'
import { Stack,Box } from '@mui/material'
import HeroText from './HeroText'
import HereoImage from './HereoImage'
const HeroSection = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent={'space-between'}
      sx={{display:{xs:"block" , sm:"small" , md:"flex" }}}    >
       <Box sx={{flex:'2'}}>
        <HeroText/>
        </Box>
       <Box sx={{flex:'1'}} >
        <HereoImage/>
       </Box>
    </Stack>
  )
}

export default HeroSection
