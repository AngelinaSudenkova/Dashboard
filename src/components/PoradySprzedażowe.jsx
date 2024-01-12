import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";


function PoradySprzedażowe() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return ( 
        <Box>
        <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ color: colors.primary[600] }}
      >
         Porady Sprzedażowe
       </Typography>
      <Box
        sx={{
          width: 360,
          height: 180,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
    
        <Box display="block" justifyContent="space-between" mt="10px">
        <Box paddingTop="10px" paddingLeft="10px">
        <Typography variant="h5" sx={{ color: colors.primary[500] }}>
          Co możesz poprawić?
        </Typography>
      </Box>
      <Box mt ="20px" paddingLeft="10px">
        <Typography variant="h6" sx={{ color: colors.primary[500]}}>
          Szybkość wysyłki
        </Typography>
      </Box>
      <Box mt ="20px" paddingLeft="10px">
        <Typography variant="h6" sx={{ color: colors.primary[500] }}>
          Szybkość odpowiedzi
        </Typography>
      </Box>
      <Box mt ="20px" paddingLeft="10px">
        <Typography variant="h6" sx={{ color: colors.primary[500] }}>
          Jakość zapakowania wysyłki
        </Typography>
      </Box>
        </Box>
      </Box>
      </Box>
      );
    };

export default PoradySprzedażowe