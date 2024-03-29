import { Button, Grid } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Zamowienia from '../../components/Zamowienia';
import { useTranslation } from 'react-i18next';

function ZamowieniaStrona() {
    const navigate = useNavigate();
    const [t, i18n] = useTranslation("global");

    const handleGoBack = () => {
        navigate("/dashboard")
      };

  return (
    <Grid container mx={4} rowSpacing={2} columnSpacing={2} marginTop="5px">
        <Grid>
            <Button onClick={handleGoBack}>{t("other.go_back")}</Button>
            <Zamowienia title="Zamówienia" nieoplacone={5} niewyslane={1} zwroty={0} />
        </Grid>
    </Grid>
    
  )
}

export default ZamowieniaStrona