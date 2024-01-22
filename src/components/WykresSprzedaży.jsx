import React from 'react';
import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import WykresKolowy from './WykresKolowy';

const WykresSprzedaży = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate();

  return (
    <Box position="relative"> 
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ color: colors.primary[600] }}
      >
       <Link to="/wykres" style={{ textDecoration: 'none', color: 'inherit',  borderBottom: '1px solid' }}>{t("dashboard.sales_chart")}</Link>
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
            zIndex: 1
          }}
        >
          <Button
            style={{ backgroundColor: "#9C9C9C", color: colors.primary[100], borderRadius: "1px" }}
            size="small"
            onClick={() => {
              navigate("/edycja");
            }}
          >
            {t("sales_chart.edit")}
          </Button>
        </Box>
        <Box display="block" justifyContent="space-between" mt="10px">
          <WykresKolowy />
        </Box>
      </Box>
    </Box>
  );
};

export default WykresSprzedaży;
