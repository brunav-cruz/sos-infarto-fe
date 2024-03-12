import React from "react";
import { ButtonGroup, Box, Grid, Button } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
// import './HomeButtons.css';
import icone_sintomas from "../../assets/frequencia-cardiaca.png";
import icone_localizacao from "../../assets/urgencia.png";
import icone_exclamacao from "../../assets/exclamacao64.png";
import LocalSaude from '../../pages/LocalSaude/LocalSaude';
import FormularioRisco from '../../pages/Formulario/FormularioRisco'


const HomeButtons = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
      sx={{
        bgcolor: "#a6dced",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6} lg={4}>
          <ButtonGroup variant="contained" orientation="vertical" fullWidth>
          <Link to="/LocalSaude">

            <Button
              startIcon={
                <img
                  style={{ width: "150px", height: "150px" }}
                  src={icone_localizacao}
                />
              }
              sx={{ backgroundColor: "white", color: "black", height: "200px" }}
              fullWidth
            >
              <h1>Localizar Unidade de Saúde</h1>
            </Button>
          </Link>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ButtonGroup variant="contained" orientation="vertical" fullWidth>
          <Link to="/Formulario">

            <Button
              startIcon={
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={icone_sintomas}
                />
              }
              sx={{ backgroundColor: "white", color: "black", height: "200px" }}
              fullWidth
            >
              <h1>Identificar sinais de infarto</h1>
            </Button>
            </Link>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ButtonGroup variant="contained" orientation="vertical" fullWidth>
          <Link to="/PrimeirosSocorros">

            <Button
              startIcon={
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={icone_sintomas}
                />
              }
              sx={{ backgroundColor: "white", color: "black", height: "200px" }}
              fullWidth
            >
              <h1>Primeiros Socorros</h1>
            </Button>
            </Link>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeButtons;
