import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {ButtonGroup ,AppBar, Box, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import { useLocation, Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.scss';
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

const theme = createTheme({
    palette: {
        primary: {
            main: "#005eff"
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
                                <Link to="/Home">
                                    <img src={logo} alt="Icon" style={{ width: '250px', height: '50px' }} />
                                </Link>
                            </div>
                            <IconButton>
                                <img src={icone_sair} alt="Icon_sair" style={{ width: '30px', height: '30px' }} />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
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
                    <ListItem button>
                        <ListItemIcon>
                            <img src={icone_historico} alt="Histórico clínico" className="icon" />
                        </ListItemIcon>
                        <ListItemText primary="Histórico clínico" />
                    </ListItem>
                    <ListItem button component={Link} to="/saibaMais">
                        <ListItemIcon>
                            <img src={icone_saiba} alt="Saiba mais" className="icon" />
                        </ListItemIcon>
                        <ListItemText primary="Saiba mais"/>
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
