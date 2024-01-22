import React from 'react'
import { Box, Typography, useTheme, FormControl, InputLabel, Select, MenuItem} from "@mui/material";
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
          height: 360,
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
        <FormControl sx={{ color: colors.primary[100], minWidth: 85, height: 40, width: "auto" }}>
          <InputLabel 
            sx={{ color: colors.primary[100] }}
            id="label"
          >
            {t("ranking_of_offers.sort")}
          </InputLabel>
          <Select
            style={{ backgroundColor: "#9C9C9C", color: colors.primary[100], minHeight: 40, maxHeight: 40 }}
            labelId="label"
            id="demo-simple-select-helper"
            label="Sort"
          >
            <MenuItem value={'op1'}>{t("ranking_of_offers.sort1")}</MenuItem>
            <MenuItem value={'op2'}>{t("ranking_of_offers.sort2")}</MenuItem>
            <MenuItem value={'op3'}>{t("ranking_of_offers.sort3")}</MenuItem>
            <MenuItem value={'op4'}>{t("ranking_of_offers.sort4")}</MenuItem>
          </Select>
        </FormControl>
        </Box>

        <Box display="block" justifyContent="space-between" mt="10px">
          <div style={{
            marginLeft: '20px',
            paddingTop: '60px'
          }}>
            <Lista />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default RankingOfert