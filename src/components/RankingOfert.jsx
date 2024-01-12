import React from 'react'
import { Box, Typography, useTheme, Grid, Button} from "@mui/material";
import { tokens } from "../theme";

const RankingOfert = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box position="relative"> 
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ color: colors.primary[600] }}
      >
        Ranking ofert 
      </Typography>
      <Box
        sx={{
          position: 'relative',  
          width: 360,
          height: 300,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',  
            top: 0,
            right: 0,
            margin: '10px',
          }}
        >
          <Button
            style={{ backgroundColor: "#9C9C9C", color: colors.primary[100], borderRadius: "1px" }}
            size="small"
          >
            Sortuj
          </Button>
        </Box>

        <Box display="block" justifyContent="space-between" mt="10px">
       
        {/*Place for sale items to be displayed*/}

        </Box>
      </Box>
    </Box>
  );
};

export default RankingOfert