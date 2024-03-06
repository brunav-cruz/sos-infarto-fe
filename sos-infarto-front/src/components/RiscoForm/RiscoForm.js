import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import RiscoButton from "./RiscoButton";

function RiscoForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [groupVisibility, setGroupVisibility] = useState({});
  const [sintomas, setSintomas] = useState([]);

  const toggleGroupVisibility = (groupName) => {
    setGroupVisibility({
      ...groupVisibility,
      [groupName]: !groupVisibility[groupName],
    });
  };

  const handleChange = (event) => {
    const { checked } = event.target;

    handleSintoma(event);
    setIsChecked(checked);
    setIsChecked2(false);
    toggleGroupVisibility("Dor no peito");
  };

  const handleSintoma = (event) => {
    const { checked, name } = event.target;
    let newSintomas;

    newSintomas = [...sintomas, name];

    console.log(newSintomas);

    setSintomas(newSintomas);
  };

  const handleChange2 = (event) => {
    const { checked, name } = event.target;

    let newSintomas;

    newSintomas = [...sintomas, name];

    console.log(newSintomas);

    setSintomas(newSintomas);
    setIsChecked2(event.target.checked);
    toggleGroupVisibility("Dor do tipo que se espalha");
  };

  const calcSinais = (sintomas) => {
    let score = 0;

    if (sintomas.includes("Dor no peito (Dor retroesternal ou precordial)")) {
      score += 4;
    }

    if (
      sintomas.includes("Sudorese (suor aumentado)") ||
      sintomas.includes("Náusea") ||
      sintomas.includes("Vômito") ||
      sintomas.includes("Dificuldade para Respirar") ||
      sintomas.includes("Tontura")
    ) {
      score += 1;
    }

    if (sintomas.includes("Dor do tipo que se espalha (irradia)")) {
      score += 2;
    }

    if (sintomas.includes("Para os Braços")) {
      score += 2;
    }

    if (score === 0) {
      return "Campos não preenchidos";
    }
    console.log(score);

    if (score <= 4) {
      window.alert("Risco Baixo");
    } else if (score == 5) {
      window.alert("Risco Médio");
    } else if (score >= 6) {
      window.alert("Risco Alto");
    }
  };

  return (
    <div
      sx={{
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#ffffff",
        zIndex: 999,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          width: "50vh",
          overflow: "auto",
          margin: "auto",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            fontWeight: "800",
            fontSize: "23px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          O QUE VOCÊ ESTÁ SENTINDO?
        </div>

        <FormGroup
          sx={{
            marginTop: "20px",
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", fontSize: "13px" }}
          >
            <FormControlLabel
              control={<Checkbox checked={isChecked} onChange={handleChange} />}
              label="Dor no peito (Dor retroesternal ou precordial)"
              name="Dor no peito (Dor retroesternal ou precordial)"
            />
          </div>

          {groupVisibility["Dor no peito"] && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <FormControlLabel
                control={
                  <Checkbox disabled={!isChecked} onChange={handleSintoma} />
                }
                label="Nao sei identificar"
                name="Nao sei identificar"
                style={{ marginLeft: "10px" }}
              />
              <FormControlLabel
                control={
                  <Checkbox disabled={!isChecked} onChange={handleSintoma} />
                }
                label="Dor do tipo facada ou pontada"
                name="Dor do tipo facada ou pontada"
                style={{ marginLeft: "10px" }}
              />
              <FormControlLabel
                control={
                  <Checkbox disabled={!isChecked} onChange={handleSintoma} />
                }
                label="Dor do tipo queimação"
                name="Dor do tipo queimação"
                style={{ marginLeft: "10px" }}
              />
              <FormControlLabel
                control={
                  <Checkbox disabled={!isChecked} onChange={handleChange2} />
                }
                label="Dor do tipo que se espalha (irradia)"
                name="Dor do tipo que se espalha (irradia)"
                style={{ marginLeft: "10px" }}
              />
            </div>
          )}
          {groupVisibility["Dor do tipo que se espalha"] && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <FormControlLabel
                control={
                  <Checkbox disabled={!isChecked2} onChange={handleSintoma} />
                }
                label="Para os Braços"
                name="Para os Braços"
                style={{ marginLeft: "20px" }}
              />
              <FormControlLabel
                control={
                  <Checkbox disabled={!isChecked2} onChange={handleSintoma} />
                }
                label="Para o estomago"
                name="Para o estomago"
                style={{ marginLeft: "20px" }}
              />
              <FormControlLabel
                control={
                  <Checkbox disabled={!isChecked2} onChange={handleSintoma} />
                }
                label="Para o queixo"
                name="Para o queixo"
                style={{ marginLeft: "20px" }}
              />
              <FormControlLabel
                control={
                  <Checkbox disabled={!isChecked2} onChange={handleSintoma} />
                }
                label="Para as costas"
                name="Para as costas"
                style={{ marginLeft: "20px" }}
              />
            </div>
          )}

          <FormControlLabel
            control={<Checkbox onChange={handleSintoma} />}
            label="Sudorese (suor aumentado)"
            name="Sudorese (suor aumentado)"
          />
          <FormControlLabel
            control={<Checkbox onChange={handleSintoma} />}
            label="Náusea"
            name="Náusea"
          />
          <FormControlLabel
            control={<Checkbox onChange={handleSintoma} />}
            label="Vômito"
            name="Vômito"
          />
          <FormControlLabel
            control={<Checkbox onChange={handleSintoma} />}
            label="Dificuldade para Respirar"
            name="Dificuldade para Respirar"
          />
          <FormControlLabel
            control={<Checkbox onChange={handleSintoma} />}
            label="Tontura"
          />
        </FormGroup>
      </Box>
      <Button
        onClick={() => calcSinais(sintomas)}
        variant="contained"
        color="success"
        sx={{
          display: "flex",
          margin: "auto",
          marginBottom: "40px",
          width: "40vh",
          height: "60px",
          fontSize: "20px",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
        }}
      >
        RESULTADO
      </Button>
    </div>
  );
}

export default RiscoForm;
