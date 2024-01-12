
import React from 'react';
import { Box, Typography, useTheme, Grid, Button} from "@mui/material";
import { tokens } from "../theme";
import StarIcon from '@mui/icons-material/Star';

const Opinia = ({rating, comment})=> {
const theme = useTheme();
const colors = tokens(theme.palette.mode);
  
  return (
    <Box mt ="20px" paddingLeft="10px">
    <Box marginLeft="15px" alignContent="start">
    <Box display="flex" justifyContent="left"  mt="10px" >
          <Box paddingLeft="10px" marginTop="10px">
            <Typography variant="h5" sx={{ color: colors.primary[500] }}>
              {rating}/5
            </Typography>
          </Box>
          <Box marginLeft="10px" paddingRight="10px" marginTop="10px">
            <StarIcon />
          </Box>
        </Box>
        <Typography variant="h5" sx={{ color: colors.primary[500] }}>
              {comment}
            </Typography>
        </Box>
        </Box>
  )
}

export default Opinia