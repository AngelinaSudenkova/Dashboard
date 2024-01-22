import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Zamowienia = ({ title, nieoplacone, niewyslane, zwroty }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [t, i18n] = useTranslation("global");

  return ( 
    <Box>
    <Typography
    variant="h4"
    fontWeight="bold"
    sx={{ color: colors.primary[600] }}
    >
    <Link to="/zamowienia" style={{ textDecoration: 'none', color: 'inherit',  borderBottom: '1px solid' }}>{t("dashboard.orders")}</Link>
    
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
      {t("orders.unpaid")} {nieoplacone}
    </Typography>
  </Box>
  <Box mt ="20px" paddingLeft="10px">
    <Typography variant="h5" sx={{ color: colors.primary[500]}}>
    {t("orders.not_sent")} {niewyslane}
    </Typography>
  </Box>
  <Box mt ="20px" paddingLeft="10px">
    <Typography variant="h5" sx={{ color: colors.primary[500] }}>
    {t("orders.returns")} {zwroty}
    </Typography>
  </Box>
    </Box>
  </Box>
  </Box>
  );
};

export default Zamowienia;
