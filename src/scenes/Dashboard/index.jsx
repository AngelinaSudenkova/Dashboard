import { useCallback } from "react";
import Zamowienia from "../../components/Zamowienia";
import { Box, Typography, useTheme, Grid } from "@mui/material";
import { tokens } from "../../theme";
import OpinijeKupujących from "../../components/OpinijeKupujących";
import JakoscSprzedazy from "../../components/JakoscSprzedazy";
import PoradySprzedażowe from "../../components/PoradySprzedażowe";
import WykresSprzedaży from "../../components/WykresSprzedaży";
import RankingOfert from "../../components/RankingOfert";


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid container mx={4} rowSpacing={2} columnSpacing={2} marginTop="10px">
      <Grid container xs={4}>
      <Zamowienia title="Zamówienia" nieoplacone={5} niewyslane={1} zwroty={0}  />
      <JakoscSprzedazy />
      <PoradySprzedażowe/>
      </Grid>
      <Grid container xs={4} columnSpacing={4}>
      <OpinijeKupujących title="Opinije kupujących" nieoplacone={5} niewyslane={1} zwroty={0}  />
      </Grid>
      <Grid container xs={4}>
      <WykresSprzedaży />
      <RankingOfert />
    
      </Grid>
      </Grid>

  );
};

export default Dashboard;

