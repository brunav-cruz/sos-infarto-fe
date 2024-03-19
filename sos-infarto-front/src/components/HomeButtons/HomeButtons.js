import React from "react";
import { ButtonGroup, Box, Grid, Button } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import icone_sintomas from "../../assets/frequencia-cardiaca.png";
import icone_localizacao from "../../assets/urgencia.png";
import icone_exclamacao from "../../assets/exclamacao64.png";
import icone_indentificarsinais from "../../assets/icone_identificarsinais.png";
import audio from "../../assets/alerta-emergencia.mp3";

const HomeButtons = () => {

  const isMobile = window.innerWidth <= 768;
  const handleButtonClick = () => {
    const alertSound = new Audio(audio);
    alertSound.play();
  };

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
          <ButtonGroup
            variant="contained"
            orientation="vertical"
            fullWidth
            style={{ maxHeight: "80%" }}
          >
            <Link to="/LocalSaude">
              <Button
                startIcon={
                  <img
                    style={{ width: "150px", height: "150px" }}
                    src={icone_localizacao}
                  />
                }
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  height: "200px",
                }}
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
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  height: "200px",
                }}
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
                    style={{ width: "90px", height: "90px" }}
                    src={icone_indentificarsinais}
                  />
                }
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  height: "200px",
                }}
                fullWidth
              >
                <h1>Primeiros Socorros</h1>
              </Button>
            </Link>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <ButtonGroup variant="contained" orientation="vertical" fullWidth>
            {isMobile ? (
              <a href="tel:192">
                <Button
                  onClick={handleButtonClick}
                  startIcon={
                    <img
                      style={{ width: '100px', height: '100px' }}
                      src={icone_exclamacao}
                      alt="exclamation icon"
                    />
                  }
                  sx={{ backgroundColor: 'red', color: 'black', height: '200px' }}
                  fullWidth
                >
                  <h1>Botão de emergência</h1>
                </Button>
              </a>
            ) : (
              <Button
                onClick={handleButtonClick}
                startIcon={
                  <img
                    style={{ width: '100px', height: '100px' }}
                    src={icone_exclamacao}
                    alt="exclamation icon"
                  />
                }
                sx={{ backgroundColor: 'red', color: 'black', height: '200px' }}
                fullWidth
              >
                <h1>Botão de emergência</h1>
              </Button>
            )}
          </ButtonGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeButtons;
