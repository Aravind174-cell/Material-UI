

import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';

export default function HeroDivider() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 660, height:300 , height:{xs:400, md:400}}}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography gutterBottom variant="h6" component="div" fontWeight={700}>
            Learn AI
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <ShareIcon sx={{fontSize:'40px'}}/>
          </Typography>
        </Stack>
          <Typography variant='h3' fontWeight={500} sx={{backgroundImage: 'linear-gradient(to right, #121FCF 0%, #CF1512 100%)',
            webkitBackgroundClip: 'text', backgroundClip: 'text', color:'transparent'
          }}>
        sample preparation of Material Ui
       </Typography>      
        </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Soft" size="small" />
          <Chip color="error" label="Medium" size="small" />
          <Chip label="Hard" size="small" />
        </Stack>
      </Box>
    </Card>
  );
}
