import React from 'react'
import { Box, Typography, useTheme, Button, FormControlLabel, Checkbox, Grid } from "@mui/material";
import { tokens } from "../theme";
import { useTranslation } from 'react-i18next';
import {  useNavigate } from 'react-router-dom';

function PoradySprzedażowe() { 
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [t, i18n] = useTranslation("global");
    const navigate = useNavigate();

    return ( 
    <Box>
        <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.primary[600] }}  
        >
            {t("sales_chart.edit_data")}
       </Typography>
      <Box
        sx={{
          width: 900,
          height: 330,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
    
        <Box display="block" justifyContent="space-between" mt="10px">
        <br />
        <Grid container alignItems="center">
            <Grid item>
                <span style={{ marginRight: '40px', marginLeft: '20px', fontSize: '16px' }}>{t("sales_chart.data")}</span>
            </Grid>
            <Grid item>
                <FormControlLabel control={<Checkbox />} label={t("sales_chart.turnover")} style={{ marginRight: '110px', fontSize: '16px' }}/>
                <FormControlLabel control={<Checkbox />} label={t("sales_chart.no_pieces")} style={{ fontSize: '16px'}}/>
            </Grid>
        </Grid>
        <br />
        <Grid container alignItems="center">
            <Grid item>
                <span style={{ marginRight: '187px', marginLeft: '20px', fontSize: '16px' }}>{t("sales_chart.time")}</span>
            </Grid>
            <Grid item>
                <FormControlLabel control={<Checkbox />} label={t("sales_chart.today")} style={{ marginRight: '101px', fontSize: '16px' }}/>
                <FormControlLabel control={<Checkbox />} label={t("sales_chart.curr_week")} style={{ marginRight: '100px', fontSize: '16px' }}/>
                <FormControlLabel control={<Checkbox />} label={t("sales_chart.last_week")} style={{ fontSize: '16px'}}/>
            </Grid>
        </Grid>
        <span style={{ marginLeft: '20px', fontSize: '10px' }}>{t("sales_chart.op1")}</span>
        <br />
        <span style={{ marginLeft: '20px', fontSize: '10px' }}>{t("sales_chart.op2")}</span>
        <div 
            style={{marginTop: '30px'}}
        >
        </div>
        <Grid container alignItems="center">
            <Grid item>
                <span style={{ marginRight: '165px', marginLeft: '20px', fontSize: '16px' }}>{t("sales_chart.type")}</span>
            </Grid>
            <Grid item>
                <FormControlLabel control={<Checkbox />} label={t("sales_chart.pie")} style={{ marginRight: '45px', fontSize: '16px' }}/>
                <FormControlLabel control={<Checkbox />} label={t("sales_chart.line")} style={{ fontSize: '16px'}}/>
            </Grid>
        </Grid>
        <Grid container alignItems="center">
            <Grid item>
                <Button
                    style={{ backgroundColor:  "#9C9C9C", color: colors.greenAccent[500], marginLeft: '20px', marginRight: '40px', marginTop: '30px' }}
                    size="small"
                    onClick={() => {
                    navigate("/dashboard");
                    }}
                >
                    {t("sales_chart.save")}
                </Button>
            </Grid>
            <br />
            <br />
            <Grid item>
                <Button
                    style={{ backgroundColor:  "#9C9C9C", color: colors.redAccent[500], marginTop: '30px'}}
                    size="small"
                    onClick={() => {
                    navigate("/dashboard");
                    }}
                >
                    {t("sales_chart.cancel")}
                </Button>
            </Grid>
        </Grid>
        </Box>
      </Box>
      </Box>
      );
    };

export default PoradySprzedażowe