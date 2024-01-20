import React from 'react'
import { Box, Typography, useTheme, Grid, Button} from "@mui/material";
import { tokens } from "../theme";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Lista from './Produkty'

const RankingOfert = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [t, i18n] = useTranslation("global");

  return (
    <Box position="relative"> 
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ color: colors.primary[600] }}
      >
      <Link to="/ranking" style={{ textDecoration: 'none', color: 'inherit',  borderBottom: '1px solid' }}>{t("dashboard.ranking_of_offers")}</Link>
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
            {t("ranking_of_offers.sort")}
          </Button>
        </Box>

        <Box display="block" justifyContent="space-between" mt="10px">
          <div style={{
            marginLeft: '20px',
            paddingTop: '5px'
          }}>
            <Lista />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default RankingOfert