import { Box, Typography, useTheme, Grid, Button} from "@mui/material";
import { tokens } from "../theme";
import Opinia from "./Opinia";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const OpinijeKupujących = ({ title, nieoplacone, niewyslane, zwroty }) => {
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
   <Link to="/opinie" style={{ textDecoration: 'none', color: 'inherit',  borderBottom: '1px solid' }}>{t("dashboard.buyers_reviews")}</Link>
   </Typography>
   <Grid container>

  <Box
    sx={{
      width: 360,
      height: 760,
      borderRadius: 1,
      bgcolor: 'primary.main',
      '&:hover': {
        bgcolor: 'primary.dark',
      },
    }}
    marginTop="10px"
  >
      <Grid container justifyContent="space-evenly" marginTop="20px">
        <Grid itiem>
          <Button style={{ backgroundColor: "#9C9C9C", color: colors.primary[100], borderRadius:"1px" }} size="small">{t("buyers_reviews.all")}</Button>
        </Grid>
        <Grid item>
          <Button style={{ backgroundColor:  "#9C9C9C", color: colors.greenAccent[500] }} size="small">{t("buyers_reviews.positive")}</Button>
        </Grid>
        <Grid item>
          <Button style={{ backgroundColor:  "#9C9C9C", color: colors.redAccent[500]}} size="small" >{t("buyers_reviews.negative")}</Button>
        </Grid>
      </Grid>
      <Grid container>

    <Box display="block" justifyContent="space-between" mt="10px">
     <Opinia rating={4.2} comment={t("buyers_reviews.first_review")}/>   
      <Opinia rating={3} comment={t("buyers_reviews.second_review")}/> 
      <Opinia rating={5} comment={t("buyers_reviews.third_review")}/> 
      <Opinia rating={3.5} comment={t("buyers_reviews.fourth_review")}/> 
      <Opinia rating={5} comment={t("buyers_reviews.fifth_review")}/>
    </Box>
    </Grid>
  </Box>
  </Grid>
  </Box>
  );
};

export default OpinijeKupujących;
