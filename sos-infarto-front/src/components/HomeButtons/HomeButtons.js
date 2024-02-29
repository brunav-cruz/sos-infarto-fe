import React from 'react';
import {ButtonGroup , Box, Grid, Button} from '@mui/material';
// import './HomeButtons.css';
import icone_sintomas from '../../assets/frequencia-cardiaca.png'
import icone_localizacao from '../../assets/urgencia.png'
import icone_exclamacao from '../../assets/exclamacao64.png'

const HomeButtons = (props) => {

    return(
        <Box
                        height="100vh"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        p={4}
                        sx={{
                            bgcolor:"#a6dced"
                        }}
                    >
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={6} lg={4}>
                            <ButtonGroup variant="contained" orientation="vertical" fullWidth>
                                <Button startIcon={<img src={icone_localizacao} />} sx={{ backgroundColor: 'white', color: 'black', height: '200px'}} fullWidth>
                                    <h1>Localizar Unidade de Saúde</h1>
                                </Button>
                            </ButtonGroup>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <ButtonGroup variant="contained" orientation="vertical" fullWidth>
                                <Button startIcon={<img src={icone_sintomas} />} sx={{ backgroundColor: 'white', color: 'black', height: '200px'}} fullWidth>
                                    <h1>Identificar sinais de infarto</h1>
                                </Button>
                            </ButtonGroup>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <ButtonGroup variant="contained" orientation="vertical" fullWidth>
                                <Button startIcon={<img src={icone_exclamacao} />} sx={{ backgroundColor: 'white', color: 'black', height: '200px'}} fullWidth>
                                    <h1>Ligar para a emergencia</h1>
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
            </Box>
    )

}

export default HomeButtons