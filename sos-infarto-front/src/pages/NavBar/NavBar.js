import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {ButtonGroup ,AppBar, Box, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import { useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.scss';
import './Buttons.scss';
import icon from '../../assets/icon.png'
import logo from '../../assets/logo_app_horizontal.png';
import icone_sair from '../../assets/sair.png';
import sair from '../../assets/icone_sair1.png';
import menu from '../../assets/icone_menu.png';
import icone_fone from '../../assets/icone_fone.png';
import icone_identificarsinais from '../../assets/icone_identificarsinais.png';
import icone_perfil from '../../assets/icone_perfil.png';
import icone_saiba from '../../assets/icone_saiba+.png';
import icone_historico from '../../assets/icone_historico.png';
import icone_sobre from '../../assets/icone_sobre.png';
import icone_sintomas from '../../assets/frequencia-cardiaca (4).png'
import icone_localizacao from '../../assets/localizacao64.png'
import icone_exclamacao from '../../assets/exclamacao64.png'

const theme = createTheme({
    palette: {
        primary: {
            main: "#005eff "
        }
    },
});

function NavBar(props) {
    const location = useLocation();
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className='main-container'>
            <ThemeProvider theme={theme}>
                <Box>
                    <AppBar position="static">
                        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <IconButton onClick={toggleSidebar}>
                                <img src={menu} alt="Icon_sair" style={{ width: '30px', height: '30px' }} />
                            </IconButton>
                            <div className="logo-container" sx={{ justifyContent: 'center' }}>
                                <img src={logo} alt="Icon" style={{ width: '250px', height: '50px' }} />
                            </div>
                            <IconButton>
                                <img src={icone_sair} alt="Icon_sair" style={{ width: '30px', height: '30px' }} />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    {/* vou ajeitar aqui depois, fiz assim pra apresentar logo e to aprendendo a mexer com react ainda -gabe */}
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
                        {/* <Grid item xs={12} md={6} lg={4}>
                            <ButtonGroup variant="contained" orientation="vertical" fullWidth>
                                <Button startIcon={<img src={icone_exclamacao} />} sx={{ backgroundColor: 'white', color: 'black', height: '200px'}} fullWidth>
                                    <h1>Ligar para a emergencia</h1>
                                </Button>
                            </ButtonGroup>
                        </Grid> */}
                    </Grid>
                        
                    </Box>
                    {/* final do meu codigo aqui */}
                </Box>
                {props.children}
            </ThemeProvider>
            <Drawer anchor="left" open={showSidebar} onClose={toggleSidebar}>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <img src={icone_perfil} alt="Perfil" className="icon" />
                        </ListItemIcon>
                        <ListItemText primary="Perfil" />
                    </ListItem>
                    {/* <ListItem button>
                        <ListItemIcon>
                            <img src={icone_identificarsinais} alt="Identificar sinais de infarto" className="icon" />
                        </ListItemIcon>
                        <ListItemText primary="Identificar sinais de infarto" />
                    </ListItem> */}
                    <ListItem button>
                        <ListItemIcon>
                            <img src={icone_historico} alt="Histórico clínico" className="icon" />
                        </ListItemIcon>
                        <ListItemText primary="Histórico clínico" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <img src={icone_saiba} alt="Saiba mais" className="icon" />
                        </ListItemIcon>
                        <ListItemText primary="Saiba mais" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <img src={icone_sobre} alt="Sobre o aplicativo" className="icon" />
                        </ListItemIcon>
                        <ListItemText primary="Sobre o aplicativo" />
                    </ListItem>
                    <ListItem button onClick={toggleSidebar}>
                        <ListItemIcon>
                            <img src={sair} alt="Sair" className="icon" />
                        </ListItemIcon>
                        <ListItemText primary="Sair" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}

export default NavBar;
