import { Box, Typography, useTheme, Grid, Button} from "@mui/material";
import { tokens } from "../theme";
import Opinia from "./Opinia";

const OpinijeKupujących = ({ title, nieoplacone, niewyslane, zwroty }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return ( 
    <Box>
    <Typography
    variant="h4"
    fontWeight="bold"
    sx={{ color: colors.primary[600] }}
  >
     {title}
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
          <Button style={{ backgroundColor: "#9C9C9C", color: colors.primary[100], borderRadius:"1px" }} size="small">Wszystkie</Button>
        </Grid>
        <Grid item>
          <Button style={{ backgroundColor:  "#9C9C9C", color: colors.greenAccent[500] }} size="small">Pozytywne</Button>
        </Grid>
        <Grid item>
          <Button style={{ backgroundColor:  "#9C9C9C", color: colors.redAccent[500]}} size="small" >Negatywne</Button>
        </Grid>
      </Grid>
      <Grid container>

    <Box display="block" justifyContent="space-between" mt="10px">
     <Opinia rating={4.2} comment="Polecam"/>   
      <Opinia rating={3} comment="Długo czekałam na wysyłkę"/> 
      <Opinia rating={5} comment="Wszystko w porządku"/> 
      <Opinia rating={3.5} comment="Zamówienie okej, ale słaby kontakt ze sprzedającym"/> 
      <Opinia rating={5} comment="OK"/>
    </Box>
    </Grid>
  </Box>
  </Grid>
  </Box>
  );
};

export default OpinijeKupujących;
