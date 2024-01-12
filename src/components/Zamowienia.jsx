import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Link } from "react-router-dom";

const Zamowienia = ({ title, nieoplacone, niewyslane, zwroty }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return ( 
    <Box>
    <Typography
    variant="h4"
    fontWeight="bold"
    sx={{ color: colors.primary[600] }}
  >
    <Link to="/zamowienia" style={{ textDecoration: 'none', color: 'inherit',  borderBottom: '1px solid' }}>{title}</Link>
     
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
      Nieopłacone: {nieoplacone}
    </Typography>
  </Box>
  <Box mt ="20px" paddingLeft="10px">
    <Typography variant="h5" sx={{ color: colors.primary[500]}}>
      Niewysłane: {niewyslane}
    </Typography>
  </Box>
  <Box mt ="20px" paddingLeft="10px">
    <Typography variant="h5" sx={{ color: colors.primary[500] }}>
      Zwroty: {zwroty}
    </Typography>
  </Box>
    </Box>
  </Box>
  </Box>
  );
};

export default Zamowienia;
