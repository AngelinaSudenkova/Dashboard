import { Button, Grid } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import EdycjaWykresu from '../../components/EdycjaWykresu';
import { useTranslation } from 'react-i18next';

function EdycjaWykresuStrona() {
    const navigate = useNavigate();
    const [t, i18n] = useTranslation("global");

    const handleGoBack = () => {
        navigate("/dashboard")
      };

  return (
    <Grid container mx={4} rowSpacing={2} columnSpacing={2} marginTop="5px">
        <Grid>
            <Button onClick={handleGoBack}>{t("other.go_back")}</Button>
            <br />
            <EdycjaWykresu/>
        </Grid>
    </Grid>
    
  )
}

export default EdycjaWykresuStrona