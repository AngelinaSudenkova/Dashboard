import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const JakoscSprzedazy = () => {

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
      <Link to="/jakosc" style={{ textDecoration: 'none', color: 'inherit',  borderBottom: '1px solid' }}>{t("dashboard.sales_quality")}</Link>
      </Typography>
      <Box
        sx={{
          width: 360,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
        <Box display="flex" justifyContent="left" alignItems="center" mt="10px" >
          <Box paddingLeft="10px" marginTop="10px">
            <Typography variant="h5" sx={{ color: colors.primary[500] }}>
              4.2/5
            </Typography>
          </Box>
          <Box marginLeft="10px" paddingRight="10px" marginTop="10px">
            <StarIcon />
          </Box>
        </Box>
        <Box mt="20px" paddingLeft="10px">
          <Typography variant="h5" sx={{ color: colors.primary[500] }}>
            {t("sales_quality.opinion")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default JakoscSprzedazy;
