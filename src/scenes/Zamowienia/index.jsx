import { Button, Grid } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Zamowienia from '../../components/Zamowienia'

function ZamowieniaStrona() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/dashboard")
      };

  return (
    <Grid containter >
        <Grid item xs={4}>
            <Button onClick={handleGoBack}>Go back</Button>
            <Zamowienia/>
        </Grid>
    </Grid>
    
  )
}

export default ZamowieniaStrona